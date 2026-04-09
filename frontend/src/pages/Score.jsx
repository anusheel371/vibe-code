import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getATSScore } from "../api/atsApi";

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const resumeId = location.state?.resumeId;

  useEffect(() => {
    if (!resumeId) return;

    const fetchScore = async () => {
      try {
        const res = await getATSScore(resumeId);
        setScore(res.score);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    fetchScore();
  }, [resumeId]);

  if (!resumeId) {
    return (
      <div className="p-10 text-center">
        No resume found. Please upload again.
      </div>
    );
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">
        ATS Score
      </h1>

      {loading && <div>Calculating...</div>}

      {!loading && score !== null && (
        <div className="text-6xl font-bold text-green-600">
          {score}/100
        </div>
      )}

      <button
        onClick={() =>
          navigate("/optimize", {
            state: { resumeId },
          })
        }
        className="mt-8 bg-black text-white px-6 py-2 rounded"
      >
        Improve Resume
      </button>
    </div>
  );
};

export default Score;