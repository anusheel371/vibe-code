import React from "react";

const ResumePreview = ({ html }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 font-semibold">
        Resume Preview
      </div>

      <div className="p-4 bg-white">
        <iframe
          title="resume-preview"
          srcDoc={html}
          className="w-full h-[600px] border"
        />
      </div>
    </div>
  );
};

export default ResumePreview;