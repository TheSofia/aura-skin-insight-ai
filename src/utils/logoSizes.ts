
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Get size classes for the logo container based on selected size
 */
export const getLogoSizeClasses = (size: LogoSize): string => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  return sizeClasses[size];
};

/**
 * Get size classes for the core dot based on selected size
 */
export const getCoreSizeClasses = (size: LogoSize): string => {
  const coreSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-6 h-6'
  };
  return coreSizes[size];
};

/**
 * Get size classes for the inner ring based on selected size
 */
export const getInnerRingSizeClasses = (size: LogoSize): string => {
  const innerRingSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };
  return innerRingSizes[size];
};

/**
 * Get size classes for the outer ring based on selected size
 */
export const getOuterRingSizeClasses = (size: LogoSize): string => {
  const outerRingSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  return outerRingSizes[size];
};
