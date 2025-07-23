import React from "react";

// TypeScript interfaces for button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  shadow?: boolean;
}

// Base button styles
const baseStyles = `
  inline-flex items-center justify-center
  font-medium transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  active:transform active:scale-95
`;

// Variant styles
const variantStyles = {
  primary: `
    bg-blue-600 text-white hover:bg-blue-700
    focus:ring-blue-500 border border-blue-600
  `,
  secondary: `
    bg-gray-600 text-white hover:bg-gray-700
    focus:ring-gray-500 border border-gray-600
  `,
  outline: `
    bg-transparent text-blue-600 border border-blue-600
    hover:bg-blue-50 focus:ring-blue-500
  `,
  ghost: `
    bg-transparent text-gray-700 hover:bg-gray-100
    focus:ring-gray-500 border border-transparent
  `,
  danger: `
    bg-red-600 text-white hover:bg-red-700
    focus:ring-red-500 border border-red-600
  `,
  success: `
    bg-green-600 text-white hover:bg-green-700
    focus:ring-green-500 border border-green-600
  `,
};

// Size styles
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

// Loading spinner component
const LoadingSpinner: React.FC = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Main Button component
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled = false,
  rounded = false,
  shadow = false,
  ...props
}) => {
  // Combine all styles
  const buttonStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    rounded ? "rounded-full" : "rounded-md",
    shadow ? "shadow-md hover:shadow-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonStyles} disabled={disabled || loading} {...props}>
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// Export default
export default Button;
