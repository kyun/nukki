"use client";
import React from "react";
import NextImage from "next/image";
import UploadButton from "../components/UploadButton";

interface UploadFile {
  url: string;
  size: number;
  name: string;
  type: string;
}
const RootContainer = () => {
  const [urls, setUrls] = React.useState<string[]>([]);
  const [uploadFiles, setUploadFiles] = React.useState<UploadFile[]>([]);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (!e.target.files || e.target.files.length < 1) return;
    const file = e.target.files[0];
    console.log(file);
    // file to blob
    const blob = new Blob([file], { type: file.type });
    // blob to url
    const url = URL.createObjectURL(blob);
    console.log(url);
    setUrls((prev) => [...prev, url]);
    setUploadFiles((prev) => [
      ...prev,
      {
        url,
        size: file.size,
        name: file.name,
        type: file.type,
      },
    ]);
  };
  return (
    <>
      <UploadButton onUpload={handleUpload} />
      {uploadFiles.map((file, index) => (
        <div key={index}>
          <NextImage src={file.url} width={300} height={300} alt="123" />
          <div>
            <p>{file.name}</p>
            <p>{file.size / 1024}Kb</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RootContainer;
