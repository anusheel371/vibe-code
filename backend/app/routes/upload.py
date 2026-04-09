from fastapi import APIRouter, UploadFile, File, HTTPException
import uuid
import shutil
import os

router = APIRouter()

UPLOAD_DIR = "uploads"

ALLOWED_EXT = ["pdf", "doc", "docx"]


@router.post("/upload-resume")
async def upload_resume(resume: UploadFile = File(...)):
    if not resume.filename:
        raise HTTPException(400, "No file uploaded")

    file_ext = resume.filename.split(".")[-1].lower()

    if file_ext not in ALLOWED_EXT:
        raise HTTPException(
            400,
            "Only PDF, DOC, DOCX allowed"
        )

    file_id = str(uuid.uuid4())
    file_name = f"{file_id}.{file_ext}"

    file_path = os.path.join(
        UPLOAD_DIR,
        file_name
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            resume.file,
            buffer
        )

    await resume.close()

    return {
        "resume_id": file_id,
        "file_path": file_path
    }