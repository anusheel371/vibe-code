import React from "react";

const SuggestionList = ({ suggestions = [] }) => {
  if (!suggestions.length) return null;

  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">
        Improvements
      </h2>

      <ul className="space-y-3">
        {suggestions.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3"
          >
            <span className="text-green-600 font-bold">
              ✓
            </span>

            <span className="text-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;