import React, { forwardRef } from "react";

// TypeScript interfaces for input props
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "filled" | "outlined" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

// Base input styles
const baseStyles = `
  w-full transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-0
  disabled:opacity-50 disabled:cursor-not-allowed
  placeholder:text-gray-400
`;

// Variant styles
const variantStyles = {
  default: `
    border border-gray-300 bg-white
    hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500
    rounded-md
  `,
  filled: `
    border border-transparent bg-gray-100
    hover:bg-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500
    rounded-md
  `,
  outlined: `
    border-2 border-gray-300 bg-transparent
    hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500
    rounded-md
  `,
  minimal: `
    border-b-2 border-gray-300 bg-transparent
    hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500
    rounded-none
  `,
};

// Size styles
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

// Error state styles
const errorStyles = `
  border-red-500 focus:border-red-500 focus:ring-red-500
  hover:border-red-600
`;

// Success state styles
const successStyles = `
  border-green-500 focus:border-green-500 focus:ring-green-500
  hover:border-green-600
`;

// Main Input component
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      fullWidth = true,
      leftIcon,
      rightIcon,
      label,
      helperText,
      error,
      success = false,
      disabled = false,
      required = false,
      className = "",
      containerClassName = "",
      labelClassName = "",
      helperTextClassName = "",
      errorClassName = "",
      ...props
    },
    ref
  ) => {
    // Determine if input has error or success state
    const hasError = !!error;
    const hasSuccess = success && !hasError;

    // Combine all styles
    const inputStyles = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      hasError ? errorStyles : "",
      hasSuccess ? successStyles : "",
      leftIcon ? "pl-10" : "",
      rightIcon ? "pr-10" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const containerStyles = [
      fullWidth ? "w-full" : "w-auto",
      containerClassName,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerStyles}>
        {/* Label */}
        {label && (
          <label
            className={`
            block text-sm font-medium text-gray-700 mb-1
            ${hasError ? "text-red-600" : ""}
            ${labelClassName}
          `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            className={inputStyles}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? "input-error" : helperText ? "input-helper" : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && !hasError && (
          <p
            id="input-helper"
            className={`
            mt-1 text-sm text-gray-500
            ${helperTextClassName}
          `}
          >
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {hasError && (
          <p
            id="input-error"
            className={`
            mt-1 text-sm text-red-600
            ${errorClassName}
          `}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

// Set display name for React DevTools
Input.displayName = "Input";

// Export default
export default Input;
