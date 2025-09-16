import React from 'react';

interface TechniqueBoxProps {
  title: string;
  children: React.ReactNode;
}

const TechniqueBox: React.FC<TechniqueBoxProps> = ({ title, children }) => {
  return (
    <div className="technique-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default TechniqueBox;
