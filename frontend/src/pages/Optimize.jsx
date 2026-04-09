import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { optimizeResume } from "../api/atsApi";

const Optimize = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const resumeId = location.state?.resumeId;

  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    if (!jobDesc || !resumeId) return;

    setLoading(true);

    try {
      const res = await optimizeResume(
        resumeId,
        jobDesc
      );

      navigate("/result", {
        state: {
          resumeId,
          jobDescription: jobDesc,
          ...res,
        },
      });

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  if (!resumeId) {
    return (
      <div className="p-10 text-center">
        No resume found. Please upload again.
      </div>
    );
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Paste Job Description
      </h1>

      <textarea
        rows="10"
        className="w-full border p-3 rounded"
        placeholder="Paste job description..."
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />

      <button
        onClick={handleOptimize}
        disabled={loading}
        className="mt-4 bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Optimizing..." : "Optimize Resume"}
      </button>
    </div>
  );
};

export default Optimize;