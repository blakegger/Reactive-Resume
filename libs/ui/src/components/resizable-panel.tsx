import { cn } from "@reactive-resume/utils";
import * as PanelPrimitive from "react-resizable-panels";

export const PanelGroup = PanelPrimitive.PanelGroup;

export const Panel = PanelPrimitive.Panel;

type PanelResizeHandleProps = React.ComponentProps<typeof PanelPrimitive.PanelResizeHandle> & {
  isDragging?: boolean;
};

export const PanelResizeHandle = ({
  className,
  isDragging,
  onDragging,
  ...props
}: PanelResizeHandleProps) => (
  <PanelPrimitive.PanelResizeHandle
    className={cn("relative h-screen", className)}
    onDragging={onDragging}
    {...props}
  >
    <div className="flex h-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-y-0 left-0 z-50 w-1 rounded-lg pl-1 transition-all hover:bg-info hover:opacity-100",
          isDragging && "bg-info opacity-100",
        )}
      />
    </div>
  </PanelPrimitive.PanelResizeHandle>
);
