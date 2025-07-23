import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
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
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Username must be at least 3 characters long",
  },
};

// Variant stories
export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled input...",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    placeholder: "Outlined input...",
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    placeholder: "Minimal input...",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input...",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input...",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    placeholder: "Extra large input...",
  },
};

// State stories
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    error: "Please enter a valid email address",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    value: "john_doe",
    success: true,
  },
};

// Type stories
export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

// With icons stories
export const WithLeftIcon: Story = {
  render: () => {
    const SearchIcon = () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );

    return (
      <Input
        label="Search"
        placeholder="Search for something..."
        leftIcon={<SearchIcon />}
      />
    );
  },
};

export const WithRightIcon: Story = {
  render: () => {
    const EyeIcon = () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    );

    return (
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        rightIcon={<EyeIcon />}
      />
    );
  },
};

export const WithBothIcons: Story = {
  render: () => {
    const SearchIcon = () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );

    const ClearIcon = () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

    return (
      <Input
        label="Search"
        placeholder="Search with icons..."
        leftIcon={<SearchIcon />}
        rightIcon={<ClearIcon />}
      />
    );
  },
};

// Full width story
export const FullWidth: Story = {
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
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="minimal" placeholder="Minimal variant" />
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small size" />
      <Input size="md" placeholder="Medium size" />
      <Input size="lg" placeholder="Large size" />
      <Input size="xl" placeholder="Extra large size" />
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Full Name" placeholder="Enter your full name" required />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        helperText="Password must be at least 8 characters"
      />
      <Input label="Phone" type="tel" placeholder="Enter your phone number" />
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      if (newValue.length > 0 && newValue.length < 3) {
        setError("Username must be at least 3 characters");
      } else {
        setError("");
      }
    };

    return (
      <Input
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={handleChange}
        error={error}
        helperText="Username will be validated as you type"
      />
    );
  },
};
