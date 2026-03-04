import os
import re
import json
from http.server import BaseHTTPRequestHandler
from datetime import datetime, timezone
from pymongo import MongoClient
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "bareforceone")
SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL")
NOTIFY_EMAIL = os.environ.get("NOTIFY_EMAIL")

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
            or email us at <a href="mailto:info@bareforceone.com" style="color:#3b82f6;text-decoration:none;">info@bareforceone.com</a>.
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


def send_email(to_email, subject, html_body):
    if not SENDGRID_API_KEY or not SENDER_EMAIL:
        return
    try:
        message = Mail(from_email=SENDER_EMAIL, to_emails=to_email, subject=subject, html_content=html_body)
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        sg.send(message)
    except Exception:
        pass


def cors_headers():
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()

    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(content_length))

            name = body.get("name", "").strip()
            email = body.get("email", "").strip()
            organization = body.get("organization", "").strip()
            sector = body.get("sector", "")
            description = body.get("description", "").strip()
            project_type = body.get("project_type", "")
            timeline = body.get("timeline", "")
            budget_range = body.get("budget_range", "")
            security_requirements = body.get("security_requirements", "")
            integration_needs = body.get("integration_needs", "")

            if not name:
                return self._error(422, "Name is required")
            if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                return self._error(422, "Valid email is required")
            if not organization:
                return self._error(422, "Organization is required")
            if not description:
                return self._error(422, "Project description is required")

            doc = {
                "name": name,
                "email": email,
                "organization": organization,
                "sector": sector,
                "project_type": project_type,
                "timeline": timeline,
                "budget_range": budget_range,
                "description": description,
                "security_requirements": security_requirements,
                "integration_needs": integration_needs,
                "status": "new",
                "created_at": datetime.now(timezone.utc).isoformat(),
            }

            if MONGO_URL:
                client = MongoClient(MONGO_URL)
                db = client[DB_NAME]
                db.proposals.insert_one(doc)
                client.close()

            send_email(
                NOTIFY_EMAIL,
                f"BFO Proposal Request: {organization} ({sector})",
                f"""<div style="font-family:sans-serif;max-width:600px;">
                    <h2 style="color:#3b82f6;">New Proposal Request</h2>
                    <h3 style="color:#333;">Contact Information</h3>
                    <table style="border-collapse:collapse;width:100%;">
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Name</td><td style="padding:8px;">{name}</td></tr>
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Email</td><td style="padding:8px;"><a href="mailto:{email}">{email}</a></td></tr>
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Organization</td><td style="padding:8px;">{organization}</td></tr>
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Sector</td><td style="padding:8px;">{sector}</td></tr>
                    </table>
                    <h3 style="color:#333;">Project Details</h3>
                    <table style="border-collapse:collapse;width:100%;">
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Type</td><td style="padding:8px;">{project_type or 'Not specified'}</td></tr>
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Timeline</td><td style="padding:8px;">{timeline or 'Not specified'}</td></tr>
                        <tr><td style="padding:8px;font-weight:bold;color:#666;">Budget</td><td style="padding:8px;">{budget_range or 'Not specified'}</td></tr>
                    </table>
                    <div style="background:#f8f9fa;padding:16px;margin-top:12px;border-left:3px solid #3b82f6;">
                        <strong>Description:</strong><br/>{description}
                    </div></div>""",
            )

            auto_reply_html = AUTO_REPLY_TEMPLATE.format(name=name, form_type="Proposal Request", form_type_lower="proposal request")
            send_email(email, "Bare Force One — We've Received Your Proposal Request", auto_reply_html)

            return self._json(200, {"success": True, "message": "Your proposal request has been received. We'll respond with a tailored capability statement within 24 hours."})

        except Exception as e:
            return self._error(500, str(e))

    def _json(self, code, data):
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def _error(self, code, msg):
        self._json(code, {"detail": msg})
