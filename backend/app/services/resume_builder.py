import os
from jinja2 import Environment, FileSystemLoader

from app.services.resume_parser import parse_resume


def generate_resume(resume_id, job_description):
    resume_text = parse_resume(resume_id)

    # absolute template path
    base_dir = os.path.dirname(__file__)
    template_dir = os.path.join(
        base_dir,
        "..",
        "templates"
    )

    env = Environment(
        loader=FileSystemLoader(template_dir)
    )

    template = env.get_template(
        "ats_template.html"
    )

    html_out = template.render(
        resume=resume_text,
        job=job_description
    )

    os.makedirs("outputs", exist_ok=True)

    output_file = f"outputs/{resume_id}.html"

    with open(
        output_file,
        "w",
        encoding="utf-8"
    ) as f:
        f.write(html_out)

    return {
        "download_url": f"/{output_file}",
        "html": html_out
    }