import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Inbox } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
];

namespace SideBar {
  export type Props = { open?: boolean };
}

export const SideBar = ({}: SideBar.Props) => {
  return (
    <Sidebar className="p-4 bg-gray-600 border-gray-200">
      <SidebarContent className="bg-gray-500">
        <SidebarGroup className="gap-4">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="gap-4">
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
