import React from 'react';

interface TaskProps {
  title: string;
  description: string;
}

const Task: React.FC<TaskProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Task;