import React from "react";

const ScoreCircle = ({ score = 0 }) => {
  const safeScore = Math.min(100, Math.max(0, score));

  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (safeScore / 100) * circumference;

  return (
    <div className="flex justify-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* background */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* progress */}
        <circle
          stroke="#16a34a"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* score */}
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold"
        >
          {safeScore}
        </text>

        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xs fill-gray-500"
        >
          /100
        </text>
      </svg>
    </div>
  );
};

export default ScoreCircle;