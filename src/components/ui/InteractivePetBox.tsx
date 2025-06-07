import React from 'react';
import { cn } from '@/lib/utils';

interface InteractivePetBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'card' | 'button' | 'option';
  cute?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  'data-interactive'?: boolean;
}

/**
 * InteractivePetBox - A cute, playful component for Pet.Pals.Agent
 * 
 * Features 3D purple styling with bouncy animations perfect for pet-themed interactions.
 * Adapted from dermo.agent with pet-friendly aesthetics.
 * 
 * @param variant - Style variant: 'default', 'card', 'button', or 'option'
 * @param cute - Enables extra cute animations (bounce/wiggle effects)
 * @param onClick - Click handler function
 * @param className - Additional CSS classes
 * @param disabled - Disables interaction
 * @param data-interactive - Marks element for cursor recognition
 */
const InteractivePetBox: React.FC<InteractivePetBoxProps> = ({
  children,
  variant = 'default',
  cute = false,
  onClick,
  className,
  disabled = false,
  'data-interactive': dataInteractive = true,
  ...props
}) => {
  const baseClasses = variant === 'option' ? 'pet-option-box' : 'interactive-pet-box';
  
  const variantClasses = {
    default: '',
    card: 'pet-card',
    button: 'pet-button',
    option: '' // handled by baseClasses
  };
  
  const cuteClasses = cute ? 'pet-bounce-animation' : '';
  
  const classes = cn(
    baseClasses,
    variant !== 'default' && variant !== 'option' && variantClasses[variant],
    cuteClasses,
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

export default InteractivePetBox;