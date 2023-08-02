import React from 'react';

type ButtonType = "submit" | "button";
type ButtonColor = "primary" | "secondary" | "blue" | "red" | "green" | "purple" | "yellow" | "orange";

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  color: ButtonColor;
  className?: string;
  onClick?: () => void;
}

const colorClasses = {
  primary: "text-white bg-blue-800 hover:bg-blue-900 active:bg-blue-950",
  secondary: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700",
  blue: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  red: "text-white bg-red-500 hover:bg-red-600 active:bg-red-700",
  green: "text-white bg-green-500 hover:bg-green-600 active:bg-green-700",
  purple: "text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
  yellow: "text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700",
  orange: "text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
};

const Button: React.FC<ButtonProps> = ({ children, type, color, className = "", onClick }) => (
  <button
    type={type}
    className={`rounded-xl px-5 py-3 text-base font-medium transition duration-200 ${colorClasses[color]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
