from keybert import KeyBERT

# Load once (global)
kw_model = KeyBERT()


def extract_keywords(text):
    if not text or len(text.strip()) == 0:
        return []

    try:
        keywords = kw_model.extract_keywords(
            text,
            keyphrase_ngram_range=(1, 2),
            stop_words="english",
            top_n=20,
        )

        return [k[0] for k in keywords]

    except Exception as e:
        print("Keyword extraction error:", e)
        return []