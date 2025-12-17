import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  // Changed rounded-md to rounded-full for modern look
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    primary: "border-transparent text-white bg-brand hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30 focus:ring-brand",
    outline: "border-brand text-brand bg-transparent hover:bg-blue-50 focus:ring-brand",
    white: "border-transparent text-brand bg-white hover:bg-gray-50 shadow-md hover:shadow-lg focus:ring-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};