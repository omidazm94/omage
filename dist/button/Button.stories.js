import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./index";
const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "outline",
                "ghost",
                "danger",
                "success",
            ],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl"],
        },
        disabled: {
            control: { type: "boolean" },
        },
        loading: {
            control: { type: "boolean" },
        },
        fullWidth: {
            control: { type: "boolean" },
        },
        rounded: {
            control: { type: "boolean" },
        },
        shadow: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
// Basic stories
export const Primary = {
    args: {
        children: "Primary Button",
        variant: "primary",
    },
};
export const Secondary = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
    },
};
export const Outline = {
    args: {
        children: "Outline Button",
        variant: "outline",
    },
};
export const Ghost = {
    args: {
        children: "Ghost Button",
        variant: "ghost",
    },
};
export const Danger = {
    args: {
        children: "Danger Button",
        variant: "danger",
    },
};
export const Success = {
    args: {
        children: "Success Button",
        variant: "success",
    },
};
// Size stories
export const Small = {
    args: {
        children: "Small Button",
        size: "sm",
    },
};
export const Medium = {
    args: {
        children: "Medium Button",
        size: "md",
    },
};
export const Large = {
    args: {
        children: "Large Button",
        size: "lg",
    },
};
export const ExtraLarge = {
    args: {
        children: "Extra Large Button",
        size: "xl",
    },
};
// State stories
export const Loading = {
    args: {
        children: "Loading...",
        loading: true,
    },
};
export const Disabled = {
    args: {
        children: "Disabled Button",
        disabled: true,
    },
};
export const FullWidth = {
    args: {
        children: "Full Width Button",
        fullWidth: true,
    },
    parameters: {
        layout: "padded",
    },
};
// Style stories
export const Rounded = {
    args: {
        children: "Rounded Button",
        rounded: true,
    },
};
export const WithShadow = {
    args: {
        children: "Button with Shadow",
        shadow: true,
    },
};
export const RoundedWithShadow = {
    args: {
        children: "Rounded with Shadow",
        rounded: true,
        shadow: true,
    },
};
// Interactive stories
export const WithClickHandler = {
    args: {
        children: "Click Me",
        onClick: () => alert("Button clicked!"),
    },
};
// All variants showcase
export const AllVariants = {
    render: () => (_jsxs("div", { className: "space-x-4", children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "danger", children: "Danger" }), _jsx(Button, { variant: "success", children: "Success" })] })),
};
// All sizes showcase
export const AllSizes = {
    render: () => (_jsxs("div", { className: "space-x-4 items-center", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "md", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" }), _jsx(Button, { size: "xl", children: "Extra Large" })] })),
};
// With icons showcase
export const WithIcons = {
    render: () => {
        const HeartIcon = () => (_jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }));
        const ArrowIcon = () => (_jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }));
        return (_jsxs("div", { className: "space-x-4", children: [_jsx(Button, { leftIcon: _jsx(HeartIcon, {}), children: "Like" }), _jsx(Button, { rightIcon: _jsx(ArrowIcon, {}), children: "Continue" }), _jsx(Button, { leftIcon: _jsx(HeartIcon, {}), rightIcon: _jsx(ArrowIcon, {}), children: "Both Icons" })] }));
    },
};
// Custom styling showcase
export const CustomStyling = {
    render: () => (_jsxs("div", { className: "space-x-4", children: [_jsx(Button, { className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600", rounded: true, shadow: true, children: "Gradient Button" }), _jsx(Button, { className: "bg-yellow-400 text-yellow-900 hover:bg-yellow-500 border-yellow-400", rounded: true, children: "Custom Colors" })] })),
};
