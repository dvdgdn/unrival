import React from 'react';

interface ArtifactBoxProps {
  title: string;
  children: React.ReactNode;
}

const ArtifactBox: React.FC<ArtifactBoxProps> = ({ title, children }) => {
  return (
    <div className="artifact-box">
      <span className="artifact-title">{title}</span>
      {children}
    </div>
  );
};

export default ArtifactBox;
