import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "./SideBar";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

export const Basic: Story = {
  args: {
    open: false,
    name: "Root",
  },
  render: (args) => {
    return (
      <div className="flex flex-row">
        <SidebarProvider>
          <SideBar {...args} />
          <main>
            <SidebarTrigger />
            <div>Foo bar</div>
          </main>
        </SidebarProvider>
      </div>
    );
  },
};
