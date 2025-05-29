
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "notebook";
  enableAutocorrect?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", enableAutocorrect = false, ...props }, ref) => {
    return (
      <div className="relative inline-block w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "dermaagent-input-elegant dermaagent-box-element hover-target",
            variant === "notebook" && [
              "bg-white/95 focus-visible:ring-dermaagent-charcoal-gray/30 focus-visible:ring-offset-0",
              "font-ibm-plex-mono font-light tracking-wide",
              "border-dermaagent-light-gray/40"
            ],
            enableAutocorrect && "spellcheck-enabled",
            className
          )}
          style={variant === "notebook" ? {
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 300,
            letterSpacing: '0.02em'
          } : {}}
          spellCheck={enableAutocorrect}
          autoCorrect={enableAutocorrect ? "on" : "off"}
          autoComplete={enableAutocorrect ? "on" : "off"}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
