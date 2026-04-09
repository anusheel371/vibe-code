import os
import uuid

from app.services.resume_parser import parse_resume
from app.services.keyword_extractor import extract_keywords
from app.services.ats_score import calculate_ats_score
from app.services.resume_builder import generate_resume


def optimize_resume(resume_id, job_description):
    resume_text = parse_resume(resume_id)

    if not resume_text:
        return {
            "score": 0,
            "suggestions": [],
            "download_url": None
        }

    keywords = extract_keywords(job_description)

    missing_keywords = [
        k for k in keywords
        if k.lower() not in resume_text.lower()
    ]

    suggestions = []

    for keyword in missing_keywords[:10]:
        suggestions.append(
            f"Add keyword '{keyword}' to your resume"
        )

    # calculate score
    score = calculate_ats_score(
        resume_id,
        job_description
    )

    improved_score = min(score + 15, 95)

    # generate optimized resume
    result = generate_resume(
        resume_id,
        job_description
    )

    return {
        "score": improved_score,
        "suggestions": suggestions,
        "download_url": result["download_url"]
    }