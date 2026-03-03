import os
import re
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


def send_notification(subject: str, html_body: str):
    """Send email notification via SendGrid"""
    if not SENDGRID_API_KEY or not SENDER_EMAIL or not NOTIFY_EMAIL:
        logger.warning("SendGrid not configured, skipping email")
        return
    try:
        message = Mail(
            from_email=SENDER_EMAIL,
            to_emails=NOTIFY_EMAIL,
            subject=subject,
            html_content=html_body,
        )
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        logger.info(f"Notification sent: {subject} - status: {response.status_code}")
    except Exception as e:
        logger.error(f"SendGrid error: {e}")
        logger.error(f"SendGrid details: from={SENDER_EMAIL}, to={NOTIFY_EMAIL}, key_prefix={SENDGRID_API_KEY[:10] if SENDGRID_API_KEY else 'NONE'}...")


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
        f"""
        <div style="font-family:sans-serif;max-width:600px;">
            <h2 style="color:#3b82f6;">New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">{submission.name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:{submission.email}">{submission.email}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Organization</td><td style="padding:8px;">{submission.organization or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Sector</td><td style="padding:8px;">{submission.sector or 'Not specified'}</td></tr>
            </table>
            <div style="background:#f8f9fa;padding:16px;margin-top:12px;border-left:3px solid #3b82f6;">
                <strong>Message:</strong><br/>{submission.message}
            </div>
        </div>
        """,
    )

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
        f"""
        <div style="font-family:sans-serif;max-width:600px;">
            <h2 style="color:#3b82f6;">New Proposal Request</h2>
            <h3 style="color:#333;">Contact Information</h3>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">{req.name}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:{req.email}">{req.email}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Organization</td><td style="padding:8px;">{req.organization}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Sector</td><td style="padding:8px;">{req.sector}</td></tr>
            </table>
            <h3 style="color:#333;">Project Details</h3>
            <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Type</td><td style="padding:8px;">{req.project_type or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Timeline</td><td style="padding:8px;">{req.timeline or 'Not specified'}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;color:#666;">Budget</td><td style="padding:8px;">{req.budget_range or 'Not specified'}</td></tr>
            </table>
            <div style="background:#f8f9fa;padding:16px;margin-top:12px;border-left:3px solid #3b82f6;">
                <strong>Description:</strong><br/>{req.description}
            </div>
            {"<div style='background:#fff3cd;padding:16px;margin-top:12px;border-left:3px solid #ffc107;'><strong>Security Requirements:</strong><br/>" + req.security_requirements + "</div>" if req.security_requirements else ""}
            {"<div style='background:#d1ecf1;padding:16px;margin-top:12px;border-left:3px solid #17a2b8;'><strong>Integration Needs:</strong><br/>" + req.integration_needs + "</div>" if req.integration_needs else ""}
        </div>
        """,
    )

    return {"success": True, "message": "Your proposal request has been received. We'll respond with a tailored capability statement within 24 hours."}


@app.get("/api/contacts")
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return {"contacts": contacts}
