import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Input } from "./index";
const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "filled", "outlined", "minimal"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl"],
        },
        type: {
            control: { type: "select" },
            options: ["text", "email", "password", "number", "tel", "url", "search"],
        },
        disabled: {
            control: { type: "boolean" },
        },
        required: {
            control: { type: "boolean" },
        },
        fullWidth: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
// Basic stories
export const Default = {
    args: {
        placeholder: "Enter text...",
    },
};
export const WithLabel = {
    args: {
        label: "Email Address",
        placeholder: "Enter your email",
        type: "email",
    },
};
export const WithHelperText = {
    args: {
        label: "Username",
        placeholder: "Enter username",
        helperText: "Username must be at least 3 characters long",
    },
};
// Variant stories
export const Filled = {
    args: {
        variant: "filled",
        placeholder: "Filled input...",
    },
};
export const Outlined = {
    args: {
        variant: "outlined",
        placeholder: "Outlined input...",
    },
};
export const Minimal = {
    args: {
        variant: "minimal",
        placeholder: "Minimal input...",
    },
};
// Size stories
export const Small = {
    args: {
        size: "sm",
        placeholder: "Small input...",
    },
};
export const Medium = {
    args: {
        size: "md",
        placeholder: "Medium input...",
    },
};
export const Large = {
    args: {
        size: "lg",
        placeholder: "Large input...",
    },
};
export const ExtraLarge = {
    args: {
        size: "xl",
        placeholder: "Extra large input...",
    },
};
// State stories
export const Disabled = {
    args: {
        label: "Disabled Input",
        placeholder: "This input is disabled",
        disabled: true,
    },
};
export const Required = {
    args: {
        label: "Required Field",
        placeholder: "This field is required",
        required: true,
    },
};
export const WithError = {
    args: {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        error: "Please enter a valid email address",
    },
};
export const WithSuccess = {
    args: {
        label: "Username",
        placeholder: "Enter username",
        value: "john_doe",
        success: true,
    },
};
// Type stories
export const Email = {
    args: {
        label: "Email",
        type: "email",
        placeholder: "Enter your email address",
    },
};
export const Password = {
    args: {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
    },
};
export const Number = {
    args: {
        label: "Age",
        type: "number",
        placeholder: "Enter your age",
    },
};
export const Search = {
    args: {
        type: "search",
        placeholder: "Search...",
    },
};
// With icons stories
export const WithLeftIcon = {
    render: () => {
        const SearchIcon = () => (_jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }));
        return (_jsx(Input, { label: "Search", placeholder: "Search for something...", leftIcon: _jsx(SearchIcon, {}) }));
    },
};
export const WithRightIcon = {
    render: () => {
        const EyeIcon = () => (_jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })] }));
        return (_jsx(Input, { label: "Password", type: "password", placeholder: "Enter your password", rightIcon: _jsx(EyeIcon, {}) }));
    },
};
export const WithBothIcons = {
    render: () => {
        const SearchIcon = () => (_jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }));
        const ClearIcon = () => (_jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }));
        return (_jsx(Input, { label: "Search", placeholder: "Search with icons...", leftIcon: _jsx(SearchIcon, {}), rightIcon: _jsx(ClearIcon, {}) }));
    },
};
// Full width story
export const FullWidth = {
    args: {
        label: "Full Width Input",
        placeholder: "This input takes full width",
        fullWidth: true,
    },
    parameters: {
        layout: "padded",
    },
};
// All variants showcase
export const AllVariants = {
    render: () => (_jsxs("div", { className: "space-y-4 w-80", children: [_jsx(Input, { variant: "default", placeholder: "Default variant" }), _jsx(Input, { variant: "filled", placeholder: "Filled variant" }), _jsx(Input, { variant: "outlined", placeholder: "Outlined variant" }), _jsx(Input, { variant: "minimal", placeholder: "Minimal variant" })] })),
};
// All sizes showcase
export const AllSizes = {
    render: () => (_jsxs("div", { className: "space-y-4 w-80", children: [_jsx(Input, { size: "sm", placeholder: "Small size" }), _jsx(Input, { size: "md", placeholder: "Medium size" }), _jsx(Input, { size: "lg", placeholder: "Large size" }), _jsx(Input, { size: "xl", placeholder: "Extra large size" })] })),
};
// Form example
export const FormExample = {
    render: () => (_jsxs("div", { className: "space-y-4 w-80", children: [_jsx(Input, { label: "Full Name", placeholder: "Enter your full name", required: true }), _jsx(Input, { label: "Email", type: "email", placeholder: "Enter your email", required: true }), _jsx(Input, { label: "Password", type: "password", placeholder: "Enter your password", required: true, helperText: "Password must be at least 8 characters" }), _jsx(Input, { label: "Phone", type: "tel", placeholder: "Enter your phone number" })] })),
};
// Interactive example
export const Interactive = {
    render: () => {
        const [value, setValue] = React.useState("");
        const [error, setError] = React.useState("");
        const handleChange = (e) => {
            const newValue = e.target.value;
            setValue(newValue);
            if (newValue.length > 0 && newValue.length < 3) {
                setError("Username must be at least 3 characters");
            }
            else {
                setError("");
            }
        };
        return (_jsx(Input, { label: "Username", placeholder: "Enter username", value: value, onChange: handleChange, error: error, helperText: "Username will be validated as you type" }));
    },
};
