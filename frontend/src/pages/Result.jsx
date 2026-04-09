import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="p-10 text-center">
        No result found. Please optimize again.
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Optimized Resume
      </h1>

      <div className="mb-6">
        <h2 className="font-semibold text-lg">
          New ATS Score
        </h2>

        <div className="text-4xl text-green-600">
          {data.score ?? "—"}/100
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold text-lg">
          Suggestions Applied
        </h2>

        <ul className="list-disc pl-5">
          {data.suggestions?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <a
        href={`http://localhost:8000${data.download_url}`}
        target="_blank"
        rel="noreferrer"
        className="bg-black text-white px-6 py-2 rounded inline-block"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Result;