
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "notebook";
  enableAutocorrect?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", enableAutocorrect = false, ...props }, ref) => {
    return (
      <div className={cn(
        "relative",
        variant === "notebook" && "notebook-container"
      )}>
        {variant === "notebook" && (
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-dermaagent-light-gray/30 border-r border-dermaagent-light-gray/50"></div>
        )}
        <div className="relative inline-block w-full">
          <textarea
            className={cn(
              "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              "dermaagent-input-elegant dermaagent-box-element hover-target",
              variant === "notebook" && [
                "pl-9 bg-white/95 focus-visible:ring-dermaagent-charcoal-gray/30 focus-visible:ring-offset-0",
                "font-ibm-plex-mono font-light tracking-wide",
                "bg-repeating-linear-gradient-to-b bg-gradient-to-b from-transparent to-transparent",
                "bg-size-[100%_24px] bg-pos-[0_0]",
                "relative overflow-hidden"
              ],
              enableAutocorrect && "spellcheck-enabled",
              className
            )}
            style={variant === "notebook" ? {
              backgroundImage: `
                repeating-linear-gradient(
                  transparent,
                  transparent 23px,
                  var(--dermaagent-light-gray, #E3E3E3) 23px,
                  var(--dermaagent-light-gray, #E3E3E3) 24px
                )
              `,
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 300,
              letterSpacing: '0.02em',
              lineHeight: '24px'
            } : {}}
            spellCheck={enableAutocorrect}
            autoCorrect={enableAutocorrect ? "on" : "off"}
            autoComplete={enableAutocorrect ? "on" : "off"}
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
