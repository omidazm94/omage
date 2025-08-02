import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
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
export declare const Button: React.FC<ButtonProps>;
export default Button;
