
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-target interactive active:scale-[0.98] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow transition-shadow active:shadow-inner active:bg-primary/95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95 active:shadow-inner",
        outline:
          "border border-input bg-background hover:bg-accent/5 hover:text-accent-foreground hover:border-beautyagent-accent/30 active:bg-accent/10 active:border-beautyagent-accent/50 active:shadow-inner transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90 active:shadow-inner",
        ghost: "hover:bg-accent/5 hover:text-accent-foreground active:bg-accent/10 active:shadow-inner",
        link: "text-primary underline-offset-4 hover:underline active:text-primary/80",
        beautyagent: "bg-beautyagent-accent text-white hover:bg-beautyagent-dark-orange shadow-sm hover:shadow-md active:shadow-inner active:bg-beautyagent-dark-orange/90 transition-all",
        subtle: "bg-beautyagent-light-grey/50 text-beautyagent-dark-grey hover:bg-beautyagent-light-grey shadow-sm hover:shadow active:shadow-inner active:bg-beautyagent-light-grey/80",
        glass: "bg-white/70 backdrop-blur-md border border-white/20 text-beautyagent-dark-grey hover:bg-white/80 hover:border-white/40 shadow-sm hover:shadow active:bg-white/90 active:shadow-inner active:border-white/60 transition-all",
        premium: "bg-gradient-to-r from-beautyagent-dark-grey to-beautyagent-deeper-grey text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:shadow-inner active:translate-y-0 active:scale-[0.97] transition-all",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        xs: "h-7 px-2 text-xs rounded",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-6 rounded-md tracking-wide",
        xl: "h-12 px-8 text-base rounded-md tracking-wide",
        icon: "h-10 w-10 rounded-md",
        pill: "h-10 px-5 py-2 rounded-full",
        "pill-lg": "h-11 px-8 py-2 rounded-full text-base tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Filter out any non-standard props that shouldn't be passed to DOM
    const {
      // Remove any custom props that might cause warnings
      ...domProps
    } = props;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-interactive="true"
        {...domProps}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
