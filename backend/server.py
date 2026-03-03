import os
import re
import html
import logging
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

logger = logging.getLogger("bfo")

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")
SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL")
NOTIFY_EMAIL = os.environ.get("NOTIFY_EMAIL")

app = FastAPI(title="Bare Force One API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

AUTO_REPLY_TEMPLATE = """
<div style="font-family:'Helvetica Neue',sans-serif;max-width:600px;margin:0 auto;background:#0a0f1c;color:#cbd5e1;padding:40px 32px;">
    <div style="border-bottom:1px solid #1e293b;padding-bottom:20px;margin-bottom:24px;">
        <strong style="color:#f8fafc;font-size:14px;letter-spacing:2px;">BARE FORCE ONE LLC</strong>
    </div>
    <h2 style="color:#f8fafc;font-size:22px;margin-bottom:8px;">We've Received Your {form_type}</h2>
    <p style="color:#94a3b8;font-size:14px;line-height:1.7;margin-bottom:24px;">
        Thank you, {name}. Your {form_type_lower} has been logged and assigned for review.
        A member of our team will respond within <strong style="color:#f8fafc;">one business day</strong>.
    </p>
    <div style="background:#111827;border-left:3px solid #3b82f6;padding:16px 20px;margin-bottom:24px;">
        <p style="color:#94a3b8;font-size:13px;margin:0;">
            For urgent matters, call <a href="tel:+19542969953" style="color:#3b82f6;text-decoration:none;">954-296-9953</a>
            or reply directly to this email.
        </p>
    </div>
    <div style="border-top:1px solid #1e293b;padding-top:20px;margin-top:24px;">
        <p style="color:#475569;font-size:11px;margin:0;">
            Bare Force One LLC &middot; Fort Lauderdale, Florida<br/>
            <a href="https://bareforceone.com" style="color:#3b82f6;text-decoration:none;">bareforceone.com</a>
        </p>
    </div>
</div>
"""


def send_email(to_email: str, subject: str, html_body: str):
    if not SENDGRID_API_KEY or not SENDER_EMAIL:
        return
    try:
        message = Mail(from_email=SENDER_EMAIL, to_emails=to_email, subject=subject, html_content=html_body)
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
        logger.info(f"Email sent to {to_email}: {subject}")
    except Exception as e:
        logger.error(f"SendGrid error sending to {to_email}: {e}")


def send_notification(subject: str, html_body: str):
    send_email(NOTIFY_EMAIL, subject, html_body)


def send_auto_reply(to_email: str, name: str, form_type: str):
    reply_html = AUTO_REPLY_TEMPLATE.format(
        name=html.escape(name),
        form_type=html.escape(form_type),
        form_type_lower=html.escape(form_type.lower()),
    )
    send_email(to_email, f"Bare Force One — We've Received Your {form_type}", reply_html)


class ContactSubmission(BaseModel):
    name: str
    email: str
    organization: str = ""
    message: str
    sector: str = ""


class ProposalRequest(BaseModel):
    name: str
    email: str
    organization: str
    sector: str
    project_type: str = ""
    timeline: str = ""
    budget_range: str = ""
    description: str
    security_requirements: str = ""
    integration_needs: str = ""


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Bare Force One API"}


@app.post("/api/contact")
async def submit_contact(submission: ContactSubmission, background_tasks: BackgroundTasks):
    if not submission.name.strip():
        raise HTTPException(status_code=422, detail="Name is required")
    if not submission.email.strip() or not re.match(r"[^@]+@[^@]+\.[^@]+", submission.email):
        raise HTTPException(status_code=422, detail="Valid email is required")
    if not submission.message.strip():
        raise HTTPException(status_code=422, detail="Message is required")
    doc = {
        "name": submission.name,
        "email": submission.email,
        "organization": submission.organization,
        "message": submission.message,
        "sector": submission.sector,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contacts.insert_one(doc)

    background_tasks.add_task(
        send_notification,
        f"BFO Contact: {submission.name} ({submission.sector or 'General'})",
        f"""<div style="font-family:sans-serif;max-width:600px;">
            <h2 style="color:#3b82f6;">New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">{html.escape(submission.name)}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:{html.escape(submission.email)}">{html.escape(submission.email)}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Organization</td><td style="padding:8px;">{html.escape(submission.organization) or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Sector</td><td style="padding:8px;">{html.escape(submission.sector) or 'Not specified'}</td></tr>
            </table>
            <div style="background:#f8f9fa;padding:16px;margin-top:12px;border-left:3px solid #3b82f6;">
                <strong>Message:</strong><br/>{html.escape(submission.message)}
            </div></div>""",
    )

    background_tasks.add_task(send_auto_reply, submission.email, submission.name, "Message")

    return {"success": True, "message": "Thank you. We'll be in touch shortly."}


@app.post("/api/request-proposal")
async def request_proposal(req: ProposalRequest, background_tasks: BackgroundTasks):
    if not req.name.strip():
        raise HTTPException(status_code=422, detail="Name is required")
    if not req.email.strip() or not re.match(r"[^@]+@[^@]+\.[^@]+", req.email):
        raise HTTPException(status_code=422, detail="Valid email is required")
    if not req.organization.strip():
        raise HTTPException(status_code=422, detail="Organization is required")
    if not req.description.strip():
        raise HTTPException(status_code=422, detail="Project description is required")
    doc = {
        "name": req.name,
        "email": req.email,
        "organization": req.organization,
        "sector": req.sector,
        "project_type": req.project_type,
        "timeline": req.timeline,
        "budget_range": req.budget_range,
        "description": req.description,
        "security_requirements": req.security_requirements,
        "integration_needs": req.integration_needs,
        "status": "new",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.proposals.insert_one(doc)

    background_tasks.add_task(
        send_notification,
        f"BFO Proposal Request: {req.organization} ({req.sector})",
        f"""<div style="font-family:sans-serif;max-width:600px;">
            <h2 style="color:#3b82f6;">New Proposal Request</h2>
            <h3 style="color:#333;">Contact Information</h3>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">{html.escape(req.name)}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:{html.escape(req.email)}">{html.escape(req.email)}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Organization</td><td style="padding:8px;">{html.escape(req.organization)}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Sector</td><td style="padding:8px;">{html.escape(req.sector)}</td></tr>
            </table>
            <h3 style="color:#333;">Project Details</h3>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Type</td><td style="padding:8px;">{html.escape(req.project_type) or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Timeline</td><td style="padding:8px;">{html.escape(req.timeline) or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Budget</td><td style="padding:8px;">{html.escape(req.budget_range) or 'Not specified'}</td></tr>
            </table>
            <div style="background:#f8f9fa;padding:16px;margin-top:12px;border-left:3px solid #3b82f6;">
                <strong>Description:</strong><br/>{html.escape(req.description)}
            </div>
            {"<div style='background:#fff3cd;padding:16px;margin-top:12px;border-left:3px solid #ffc107;'><strong>Security Requirements:</strong><br/>" + html.escape(req.security_requirements) + "</div>" if req.security_requirements else ""}
            {"<div style='background:#d1ecf1;padding:16px;margin-top:12px;border-left:3px solid #17a2b8;'><strong>Integration Needs:</strong><br/>" + html.escape(req.integration_needs) + "</div>" if req.integration_needs else ""}
        </div>""",
    )

    background_tasks.add_task(send_auto_reply, req.email, req.name, "Proposal Request")

    return {"success": True, "message": "Your proposal request has been received. We'll respond with a tailored capability statement within 24 hours."}


@app.get("/api/contacts")
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return {"contacts": contacts}
