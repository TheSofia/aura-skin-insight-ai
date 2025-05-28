
import React from "react";
import TypingCallToAction from "./TypingCallToAction";

interface CallToActionProps {
  animationStates: {
    isTextVisible: boolean;
  };
  cursorProximity: number;
}

const CallToAction = ({ animationStates, cursorProximity }: CallToActionProps) => {
  return (
    <TypingCallToAction 
      animationStates={animationStates}
      cursorProximity={cursorProximity}
    />
  );
};

export default CallToAction;
