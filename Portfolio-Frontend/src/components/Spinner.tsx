import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export interface SpinnerProps {
  className?: string;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = "p-10", text = "" }) => (
  <div className={`flex flex-col justify-center gap-3 ${className}`}>
    <FontAwesomeIcon icon={faCircleNotch} className="text-8xl animate-spin" />
    <span className="text-white text-xl">{text}</span>
  </div>
);

export default Spinner;
