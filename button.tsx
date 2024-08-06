import React from 'react';
import { JSX, SVGProps } from 'react';

type ButtonProps = {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const buttonVariants = {
  default: 'bg-primary text-white hover:bg-primary-dark',
  ghost: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
  outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10',
};

const buttonSizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'default',
  size = 'medium',
  className,
  onClick,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const variantClass = buttonVariants[variant];
  const sizeClass = buttonSizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${sizeClass} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
