
import { useState } from "react";

export type LoadingMessagesSequence = Array<{ message: string; delay: number }>;

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Preparing your experience");

  const startLoading = (initialMessage: string, duration: number = 1200, messageSequence?: LoadingMessagesSequence) => {
    setLoadingMessage(initialMessage);
    setIsLoading(true);
    
    // Show messages sequentially if provided
    if (messageSequence) {
      messageSequence.forEach(({ message, delay }) => {
        setTimeout(() => {
          setLoadingMessage(message);
        }, delay);
      });
    }
    
    // Return a promise that resolves when loading is complete
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve();
      }, duration);
    });
  };

  return {
    isLoading,
    loadingMessage,
    startLoading,
    setLoadingMessage
  };
};

export default useLoadingState;
