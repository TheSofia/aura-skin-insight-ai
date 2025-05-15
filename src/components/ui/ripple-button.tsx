
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      
      ripple.style.left = `${left}px`;
      ripple.style.top = `${top}px`;
      ripple.className = "ripple";
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    return (
      <Button
        ref={ref}
        className={cn("ripple-button relative overflow-hidden", className)}
        onClick={handleRipple}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

RippleButton.displayName = "RippleButton";

export { RippleButton };
