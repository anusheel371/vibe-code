// frontend/src/pages/Upload.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    // ... your existing upload logic
    setTimeout(() => {
      setLoading(false);
      navigate("/score", { state: { resumeId: "demo123" } });
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="card p-12 max-w-2xl w-full">
        <div className="mb-8">
          <h2 className="text-5xl font-bold tracking-tighter mb-4">Analyze Your Resume</h2>
          <p className="text-xl text-slate-600">Get AI-powered feedback in seconds</p>
        </div>

        <div className="border-2 border-dashed border-slate-300 rounded-3xl p-12 hover:border-blue-400 transition-colors mb-8">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            id="resume-upload"
          />
          <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              📄
            </div>
            <p className="text-lg font-medium mb-1">Drop your resume here</p>
            <p className="text-slate-500">or click to browse (PDF/DOCX)</p>
          </label>
        </div>

        {file && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-left">
            Selected: <span className="font-medium">{file.name}</span>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="btn-primary w-full text-lg py-4 text-base"
        >
          {loading ? "Analyzing with AI..." : "Upload & Get Vibe Score"}
        </button>
      </div>
    </div>
  );
}

export default Upload;
