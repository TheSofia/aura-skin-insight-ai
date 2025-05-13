
import React from "react";
import LoadingAnimation from "@/components/LoadingAnimation";

type LoadingScreenProps = {
  loadingMessage: string;
};

const LoadingScreen = ({ loadingMessage }: LoadingScreenProps) => {
  return (
    <div className="app-container flex items-center justify-center bg-gradient-light">
      <div className="flex flex-col items-center max-w-md text-center">
        <LoadingAnimation size="md" message={loadingMessage} />
        <p className="text-beautyagent-medium-grey text-sm mt-8 max-w-xs">
          We're creating a personalized experience just for you. This will only take a moment.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
