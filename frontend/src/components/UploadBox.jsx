import React, { useState } from "react";

const UploadBox = ({ onUpload }) => {
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      alert("Only PDF or DOC/DOCX allowed");
      return;
    }

    setFileName(file.name);
    onUpload(file);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed p-10 text-center rounded-lg cursor-pointer
      ${dragging ? "border-black bg-gray-50" : "border-gray-300"}`}
    >
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="hidden"
        id="resumeUpload"
      />

      <label htmlFor="resumeUpload" className="cursor-pointer">
        <div className="text-lg font-semibold">
          Upload Resume
        </div>

        <div className="text-sm text-gray-500 mt-2">
          Drag & drop or click — PDF / DOCX
        </div>
      </label>

      {fileName && (
        <div className="mt-4 text-green-600 font-medium">
          {fileName}
        </div>
      )}
    </div>
  );
};

export default UploadBox;