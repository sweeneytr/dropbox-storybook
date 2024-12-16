import { FolderClosed, FolderOpen } from "lucide-react";
import React, { ReactNode } from "react";

namespace Folder {
  export type Props = {
    open?: boolean;
    name: string;
    children?: ReactNode;
  };
}

export const Folder = ({ open, name, children }: Folder.Props) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        {open ? <FolderOpen /> : <FolderClosed />}
        {name}
      </div>
      {open && children && <div className="pl-4">{children}</div>}
    </div>
  );
};
