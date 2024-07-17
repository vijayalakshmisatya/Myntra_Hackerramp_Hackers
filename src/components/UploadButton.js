import React from 'react';
import './UploadButton.css';

const UploadButton = ({ onFileSelect }) => {
  return (
    <div className="upload-button">
      <label htmlFor="file-upload" className="custom-file-upload">
        <img src={`${process.env.PUBLIC_URL}/path-to-camera-icon.png`} alt="Upload" />
      </label>
      <input id="file-upload" type="file" onChange={onFileSelect} />
    </div>
  );
};

export default UploadButton;
