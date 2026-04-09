from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.resume_optimizer import optimize_resume

router = APIRouter()


class OptimizeRequest(BaseModel):
    resume_id: str
    job_description: str


@router.post("/optimize")
def optimize(data: OptimizeRequest):
    try:
        result = optimize_resume(
            data.resume_id,
            data.job_description
        )

        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )