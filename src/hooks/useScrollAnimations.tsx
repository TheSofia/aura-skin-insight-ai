
import { useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

const useScrollAnimations = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    animationClass = "animate-fade-in"
  } = options;
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  const setRefs = (el: HTMLElement | null, index: number) => {
    elementsRef.current[index] = el;
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.classList.remove('opacity-0');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all elements
    elementsRef.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transitionDelay = `${(index + 1) * 100}ms`;
        observerRef.current?.observe(ref);
      }
    });

    // Cleanup on unmount
    return () => {
      elementsRef.current.forEach((ref) => {
        if (ref) observerRef.current?.unobserve(ref);
      });
    };
  }, [animationClass, threshold, rootMargin]);

  return { setRefs };
};

export default useScrollAnimations;
