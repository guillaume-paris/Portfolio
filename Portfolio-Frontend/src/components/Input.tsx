import React from 'react';

export type defaultState = "default" | "editing";

export interface InputProps {
  defaultState?: defaultState;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeHolder?: string;
  className?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ defaultState, value, onChange, type = "text", required = false, placeHolder, className = "", label = "" }) => {
  return (
    <label className={`${className} flex flex-col gap-2 text-black font-regular text-md`}>
      {label}
      <input
        type={type}
        className="border text-md rounded-lg p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default Input;
