
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow transition-shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent/5 hover:text-accent-foreground hover:border-beautyagent-accent/30 transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/5 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        beautyagent: "bg-beautyagent-accent text-white hover:bg-beautyagent-dark-orange shadow-sm hover:shadow-md transition-all",
        subtle: "bg-beautyagent-light-grey/50 text-beautyagent-dark-grey hover:bg-beautyagent-light-grey shadow-sm hover:shadow",
        glass: "bg-white/70 backdrop-blur-md border border-white/20 text-beautyagent-dark-grey hover:bg-white/80 hover:border-white/40 shadow-sm hover:shadow transition-all",
        premium: "bg-gradient-to-r from-beautyagent-dark-grey to-beautyagent-deeper-grey text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        xs: "h-7 px-2 text-xs rounded",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-6 rounded-md tracking-wide",
        xl: "h-12 px-8 text-base rounded-md tracking-wide",
        icon: "h-10 w-10 rounded-md",
        pill: "h-10 px-5 py-2 rounded-full", // Added pill variant with fully rounded corners
        "pill-lg": "h-11 px-8 py-2 rounded-full text-base tracking-wide", // Added larger pill variant
      },
      animation: {
        none: "",
        pulse: "btn-pulse", // Pulsing animation effect
        cellular: "cellular-pulse", // Cellular animation effect
        subtle: "animate-hover-subtle", // Very subtle animation
        scale: "active:scale-95 transition-transform", // Scale down when clicked
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
