import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Contact",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="inline-block"
      >
        <path d="M12 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.5c-1.4 0-2.8 0.7-3.8 1.8l2.1 2.1L13 15l-1.8 1.8c-0.9 0.9-2.2 1.4-3.6 1.4-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4zM2 4.2L7 4.2c0.6 0 1.2.2 1.7.6l5.4 5.4L22 7.3l5.3-5.3c0.6-0.6 0.6-1.6 0-2.2l-5.4-5.4c-0.5-0.5-1.2-0.6-1.8-0.1L12 2.5l-5.1 5.1L4.2 4.2c-0.5-0.5-1.2-0.6-1.8-0.1z" />
      </svg>
    ),
    size: "icon",
  },
};

export const accent: Story = {
  args: {
    variant: "accent",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="inline-block"
      >
        <path d="M12 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.5c-1.4 0-2.8 0.7-3.8 1.8l2.1 2.1L13 15l-1.8 1.8c-0.9 0.9-2.2 1.4-3.6 1.4-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4zM2 4.2L7 4.2c0.6 0 1.2.2 1.7.6l5.4 5.4L22 7.3l5.3-5.3c0.6-0.6 0.6-1.6 0-2.2l-5.4-5.4c-0.5-0.5-1.2-0.6-1.8-0.1L12 2.5l-5.1 5.1L4.2 4.2c-0.5-0.5-1.2-0.6-1.8-0.1z" />
      </svg>
    ),
    size: "icon-lg",
  },
};
;
