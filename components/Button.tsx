import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 active:bg-white active:text-black",
    secondary: "bg-secondary text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-200 active:bg-white active:text-black",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-white active:text-black",
    white: "bg-white text-primary hover:bg-gray-50 active:bg-white active:text-black",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;