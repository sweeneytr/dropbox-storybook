import { fn } from "@storybook/test";
import React from "react";
import { Folder } from "./Folder";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Folder>;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Folder> = {
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Closed: Story = {
  args: {
    open: false,
    name: "Root",
    children: <Folder open={false} name="Subfolder" />,
  },
  render: (args) => (
    <Folder {...args}>
      {" "}
      <Folder name="Sub1" />
      <Folder name="Sub2" />
      <Folder name="Sub3" />
    </Folder>
  ),
};
