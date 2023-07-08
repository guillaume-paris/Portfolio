import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${className} bg-gray-700 rounded shadow-lg p-4`}>
    {children}
  </div>
);

export default Card;
