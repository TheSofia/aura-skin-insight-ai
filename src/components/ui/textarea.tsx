
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "notebook";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div className={cn(
        "relative",
        variant === "notebook" && "notebook-container"
      )}>
        {variant === "notebook" && (
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-aurascan-light-grey/30 border-r border-aurascan-light-grey/50"></div>
        )}
        <div className="relative inline-block w-full">
          <textarea
            className={cn(
              "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-light",
              "dermaagent-input-elegant dermaagent-box-element hover-target",
              variant === "notebook" && "pl-9 bg-notebook bg-opacity-5 focus-visible:ring-aurascan-dark-grey/30 focus-visible:ring-offset-0",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
