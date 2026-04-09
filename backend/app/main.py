from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

# Import routes
from app.routes.upload import router as upload_router
from app.routes.score import router as score_router
from app.routes.optimize import router as optimize_router
from app.routes.generate import router as generate_router


app = FastAPI(title="ATS Resume AI")


# CORS (allow React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create folders if not exist
os.makedirs("uploads", exist_ok=True)
os.makedirs("outputs", exist_ok=True)


# Serve generated resumes
app.mount(
    "/outputs",
    StaticFiles(directory="outputs"),
    name="outputs"
)


# Register routes
app.include_router(upload_router)
app.include_router(score_router)
app.include_router(optimize_router)
app.include_router(generate_router)


@app.get("/")
def root():
    return {
        "message": "ATS Resume AI Backend Running"
    }