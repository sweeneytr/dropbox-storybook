import { Folder } from "./Folder";

import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";

type Story = StoryObj<typeof Folder>;

const meta: Meta<typeof Folder> = {
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

export const Closed: Story = {
  args: {
    open: false,
    name: "Root",
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    return (
      <div>
        <Folder onOpenChange={(open) => updateArgs({ open })} {...args}>
          <Folder name="Sub1" />
          <Folder name="Sub2" />
          <Folder name="Sub3" />
        </Folder>
      </div>
    );
  },
};
