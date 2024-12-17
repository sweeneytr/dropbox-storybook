import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "./SideBar";

import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};
export default meta;

export const Basic: Story = {
  args: {
    open: false,
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    return (
      <SidebarProvider
        open={args.open}
        onOpenChange={(open) => updateArgs({ open })}
      >
        <SideBar {...args} />
        <main className="bg-gray-100">
          <SidebarTrigger />
          <div>Foo bar</div>
        </main>
      </SidebarProvider>
    );
  },
};
