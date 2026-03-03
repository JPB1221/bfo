import os
from datetime import datetime, timezone
import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")

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


class ContactSubmission(BaseModel):
    name: str
    email: str
    organization: str = ""
    message: str
    sector: str = ""

    @classmethod
    def validate_fields(cls, values):
        return values


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "Bare Force One API"}


@app.post("/api/contact")
async def submit_contact(submission: ContactSubmission):
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
    return {"success": True, "message": "Thank you. We'll be in touch shortly."}


@app.get("/api/contacts")
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return {"contacts": contacts}
