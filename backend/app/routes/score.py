from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.ats_score import calculate_ats_score

router = APIRouter()


class ScoreRequest(BaseModel):
    resume_id: str
    job_description: str | None = None


@router.post("/ats-score")
def ats_score(data: ScoreRequest):
    try:
        score = calculate_ats_score(
            data.resume_id,
            data.job_description
        )

        return {"score": score}

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )