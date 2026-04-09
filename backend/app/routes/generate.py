from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.resume_builder import generate_resume

router = APIRouter()


class GenerateRequest(BaseModel):
    resume_id: str
    job_description: str


@router.post("/generate-resume")
def generate(data: GenerateRequest):
    try:
        result = generate_resume(
            data.resume_id,
            data.job_description
        )

        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )