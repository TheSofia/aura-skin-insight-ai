import React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveFuturisticBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'card' | 'button' | 'subtle';
  enhanced?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  'data-interactive'?: boolean;
}

/**
 * InteractiveFuturisticBox - A reusable component for dermo.agent
 * 
 * Provides futuristic click interactions that complement the CustomCursor system.
 * Features hardware-accelerated animations and accessibility support.
 * 
 * @param variant - Style variant: 'default', 'card', 'button', or 'subtle'
 * @param enhanced - Enables animated border effect on click
 * @param onClick - Click handler function
 * @param className - Additional CSS classes
 * @param disabled - Disables interaction
 * @param data-interactive - Marks element for CustomCursor recognition
 */
const InteractiveFuturisticBox: React.FC<InteractiveFuturisticBoxProps> = ({
  children,
  variant = 'default',
  enhanced = false,
  onClick,
  className,
  disabled = false,
  'data-interactive': dataInteractive = true,
  ...props
}) => {
  const baseClasses = 'interactive-futuristic-box';
  
  const variantClasses = {
    default: '',
    card: 'card',
    button: 'button',
    subtle: 'subtle'
  };
  
  const classes = cn(
    baseClasses,
    variant !== 'default' && variantClasses[variant],
    enhanced && 'enhanced',
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Support keyboard interaction (Enter and Space)
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role={onClick ? 'button' : undefined}
      aria-disabled={disabled}
      data-interactive={dataInteractive}
      {...props}
    >
      {children}
    </div>
  );
};

export default InteractiveFuturisticBox;