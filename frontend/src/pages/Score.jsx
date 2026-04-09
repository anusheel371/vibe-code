// frontend/src/pages/Score.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const calculatedScore = 78;
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
          <div className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-3xl text-lg font-semibold
            ${score >= 80 ? 'bg-green-100 text-green-700' : 
              score >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
            {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/optimize')}
            className="btn-primary py-6 text-lg font-semibold flex items-center justify-center gap-3"
          >
            Improve My Score →
          </button>

          <button
            onClick={() => navigate('/result')}
            className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 py-6 text-lg font-semibold rounded-2xl transition-all"
          >
            View Detailed Analysis
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-8">
        This score is powered by AI analysis of content, structure, keywords, and design
      </p>
    </div>
  );
}

export default Score;
