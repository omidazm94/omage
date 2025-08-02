var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
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
export const Input = forwardRef((_a, ref) => {
    var { variant = "default", size = "md", fullWidth = true, leftIcon, rightIcon, label, helperText, error, success = false, disabled = false, required = false, className = "", containerClassName = "", labelClassName = "", helperTextClassName = "", errorClassName = "" } = _a, props = __rest(_a, ["variant", "size", "fullWidth", "leftIcon", "rightIcon", "label", "helperText", "error", "success", "disabled", "required", "className", "containerClassName", "labelClassName", "helperTextClassName", "errorClassName"]);
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
    return (_jsxs("div", { className: containerStyles, children: [label && (_jsxs("label", { className: `
            block text-sm font-medium text-gray-700 mb-1
            ${hasError ? "text-red-600" : ""}
            ${labelClassName}
          `, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] })), _jsxs("div", { className: "relative", children: [leftIcon && (_jsx("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: leftIcon })), _jsx("input", Object.assign({ ref: ref, className: inputStyles, disabled: disabled, "aria-invalid": hasError, "aria-describedby": hasError ? "input-error" : helperText ? "input-helper" : undefined }, props)), rightIcon && (_jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: rightIcon }))] }), helperText && !hasError && (_jsx("p", { id: "input-helper", className: `
            mt-1 text-sm text-gray-500
            ${helperTextClassName}
          `, children: helperText })), hasError && (_jsx("p", { id: "input-error", className: `
            mt-1 text-sm text-red-600
            ${errorClassName}
          `, children: error }))] }));
});
// Set display name for React DevTools
Input.displayName = "Input";
// Export default
export default Input;
