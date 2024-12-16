import { FolderClosed, FolderOpen } from "lucide-react";
import { ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

namespace Folder {
  export type Props = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    name: string;
    children?: ReactNode;
  };
}

export const Folder = ({
  open,
  onOpenChange,
  name,
  children,
}: Folder.Props) => {
  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange}>
      <Collapsible.Trigger className="flex flex-row items-center gap-4">
        {open ? <FolderOpen /> : <FolderClosed />}
        {name}
      </Collapsible.Trigger>
      <Collapsible.Content className="pl-4">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
