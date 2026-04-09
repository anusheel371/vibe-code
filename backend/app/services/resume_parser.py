import pdfplumber
import docx
import os


def extract_text_from_pdf(path):
    text = ""

    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text


def extract_text_from_docx(path):
    doc = docx.Document(path)

    return "\n".join(
        [p.text for p in doc.paragraphs if p.text]
    )


def parse_resume(resume_id):
    uploads = "uploads"

    try:
        for file in os.listdir(uploads):
            if file.startswith(resume_id):

                file_path = os.path.join(
                    uploads,
                    file
                )

                if file.endswith(".pdf"):
                    return extract_text_from_pdf(
                        file_path
                    )

                if file.endswith(".docx"):
                    return extract_text_from_docx(
                        file_path
                    )

        return ""

    except Exception as e:
        print("Resume parse error:", e)
        return ""