import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../api/atsApi";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const res = await uploadResume(file);

      navigate("/score", {
        state: { resumeId: res.resume_id },
      });

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Upload Your Resume
      </h1>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload & Analyze"}
      </button>
    </div>
  );
};

export default Upload;