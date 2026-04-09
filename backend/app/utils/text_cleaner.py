import re


def clean_text(text: str) -> str:
    if not text:
        return ""

    text = text.lower()

    # remove urls
    text = re.sub(r"http\S+", " ", text)

    # remove emails
    text = re.sub(r"\S+@\S+", " ", text)

    # preserve tech tokens
    text = text.replace("c++", "cplusplus")
    text = text.replace("node.js", "nodejs")
    text = text.replace("react.js", "reactjs")
    text = text.replace(".net", "dotnet")

    # remove special chars
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text)

    # remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    return text