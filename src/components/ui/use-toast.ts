
import { useToast as useOriginalToast, toast as originalToast } from "@/hooks/use-toast";

// Enhanced toast with refined animations and styling
export function useToast() {
  const { toast: originalToastFn, ...rest } = useOriginalToast();
  
  const toast = (props: Parameters<typeof originalToastFn>[0]) => {
    return originalToastFn({
      ...props,
      className: `${props.className || ''} animate-in fade-in-50 slide-in-from-bottom-5 duration-300 ease-out`,
    });
  };
  
  return {
    ...rest,
    toast,
  };
}

// Predefined toast variants for consistent styling
export const toast = {
  ...originalToast,
  
  // Override default toast with enhanced styling
  default: (props: Parameters<typeof originalToast.default>[0]) => {
    return originalToast.default({
      ...props,
      className: `${props.className || ''} bg-white border-beautyagent-light-grey shadow-lg`,
    });
  },
  
  // Success toast with subtle green accent
  success: (props: Parameters<typeof originalToast.success>[0]) => {
    return originalToast.success({
      ...props,
      className: `${props.className || ''} bg-white border-l-4 border-l-green-500 border-t-white border-r-white border-b-white shadow-lg`,
    });
  },
  
  // Error toast with subtle red accent
  error: (props: Parameters<typeof originalToast.error>[0]) => {
    return originalToast.error({
      ...props,
      className: `${props.className || ''} bg-white border-l-4 border-l-red-500 border-t-white border-r-white border-b-white shadow-lg`,
    });
  },
  
  // BeautyAgent branded toast with accent color
  brand: (props: { title?: string; description?: string; action?: React.ReactNode; className?: string }) => {
    return originalToast({
      ...props,
      className: `${props.className || ''} bg-white border-l-4 border-l-beautyagent-accent border-t-white border-r-white border-b-white shadow-lg`,
    });
  },
  
  // Elegant glass effect toast
  glass: (props: { title?: string; description?: string; action?: React.ReactNode; className?: string }) => {
    return originalToast({
      ...props,
      className: `${props.className || ''} bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg`,
    });
  },
};
