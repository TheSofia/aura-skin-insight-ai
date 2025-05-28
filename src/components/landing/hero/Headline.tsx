
import React from "react";
import TypingHeadline from "./TypingHeadline";

interface HeadlineProps {
  animationStates: {
    isTextVisible: boolean;
    showVersionHighlight: boolean;
  };
  cursorProximity: number;
  headlineRef: React.RefObject<HTMLDivElement>;
}

const Headline = ({ animationStates, cursorProximity, headlineRef }: HeadlineProps) => {
  return (
    <TypingHeadline 
      animationStates={animationStates}
      cursorProximity={cursorProximity}
      headlineRef={headlineRef}
    />
  );
};

export default Headline;
