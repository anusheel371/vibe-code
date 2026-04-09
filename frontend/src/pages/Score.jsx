// frontend/src/pages/Score.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Get score from navigation state (you can replace this with real API data later)
  const resumeData = location.state || {};

  useEffect(() => {
    // Simulate AI scoring delay
    setTimeout(() => {
      const calculatedScore = 78; // Replace with your actual score from backend
      setScore(calculatedScore);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
        <h3 className="text-2xl font-semibold text-slate-700">Calculating Vibe Score...</h3>
        <p className="text-slate-500 mt-2">Our AI is analyzing your resume</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Your Resume Vibe Score</h1>
        <p className="text-slate-600 text-lg">Here's how strong your resume looks to recruiters</p>
      </div>

      <div className="card p-10 md:p-16">
        {/* Score Circle */}
        <div className="flex justify-center mb-10">
          <div 
            className="score-circle mx-auto relative"
            style={{ '--score': `${score}%` }}
          >
            <div className="text-center">
              <div className="text-7xl font-bold text-slate-900">{score}</div>
              <div className="text-base text-slate-500 -mt-1">/ 100</div>
            </div>
          </div>
        </div>

        {/* Score Label */}
        <div className="text-center mb-12">
          <div className
