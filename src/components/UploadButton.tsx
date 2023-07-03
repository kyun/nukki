"use client";

import React from "react";
import { styled } from "styled-components";

const Base = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #5113ff;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #3f0ebe;
  }
  &:active {
    background: #2e0a8c;
  }
  & > input[type="file"] {
    display: none;
  }
`;

interface Props {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UploadButton = ({ onUpload }: Props) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    onUpload(e);
  };
  return (
    <Base>
      <input
        ref={ref}
        type="file"
        accept=".png,.jpg,.jpeg"
        multiple
        onChange={handleChange}
      />
      Upload Images
    </Base>
  );
};

export default UploadButton;
