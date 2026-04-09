import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});


// Upload Resume
export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await API.post(
    "/upload-resume",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};


// Get ATS Score
export const getATSScore = async (
  resumeId,
  jobDescription
) => {
  const res = await API.post("/ats-score", {
    resume_id: resumeId,
    job_description: jobDescription,
  });

  return res.data;
};


// Get Suggestions
export const getSuggestions = async (
  resumeId,
  jobDescription
) => {
  const res = await API.post(
    "/optimize",
    {
      resume_id: resumeId,
      job_description: jobDescription,
    }
  );

  return res.data;
};


// Optimize Resume
export const optimizeResume = async (
  resumeId,
  jobDescription
) => {
  const res = await API.post("/optimize", {
    resume_id: resumeId,
    job_description: jobDescription,
  });

  return res.data;
};


// Generate Resume
export const generateResume = async (
  resumeId,
  jobDescription
) => {
  const res = await API.post("/generate-resume", {
    resume_id: resumeId,
    job_description: jobDescription,
  });

  return res.data;
};


// Download Resume
export const downloadResume = (fileUrl) => {
  window.open(
    `http://localhost:8000${fileUrl}`,
    "_blank"
  );
};