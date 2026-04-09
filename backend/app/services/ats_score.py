from app.services.resume_parser import parse_resume
from app.services.keyword_extractor import extract_keywords
from app.utils.similarity import cosine_sim
from app.utils.text_cleaner import clean_text


def calculate_ats_score(resume_id, job_description=None):
    resume_text = parse_resume(resume_id)

    if not resume_text:
        return 0

    # If no JD provided → base ATS score
    if not job_description:
        return 65

    resume_text = clean_text(resume_text).lower()
    job_description = clean_text(job_description).lower()

    # Extract keywords
    keywords = extract_keywords(job_description)

    # Semantic similarity
    similarity = cosine_sim(resume_text, job_description)

    if similarity is None:
        similarity = 0

    # Keyword matching
    keyword_matches = sum(
        1 for k in keywords if k.lower() in resume_text
    )

    keyword_score = 0
    if len(keywords) > 0:
        keyword_score = keyword_matches / len(keywords)

    # Section scoring
    section_score = 0

    if "experience" in resume_text:
        section_score += 0.2

    if "education" in resume_text:
        section_score += 0.2

    if "skills" in resume_text:
        section_score += 0.2

    if "project" in resume_text:
        section_score += 0.2

    if "summary" in resume_text:
        section_score += 0.2

    # Final weighted score
    final_score = (
        similarity * 0.5 +      # 50%
        keyword_score * 0.3 +   # 30%
        section_score * 0.2     # 20%
    ) * 100

    return int(min(final_score, 100))