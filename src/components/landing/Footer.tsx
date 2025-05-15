
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 text-center w-full">
      <p className="text-beautyagent-medium-grey text-xs opacity-60 mb-2">
        Designed with light. Powered by AI.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
            <span className="transform group-hover:scale-110 transition-transform">
              IG
            </span>
          </span>
        </a>
        <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
            <span className="transform group-hover:scale-110 transition-transform">
              FB
            </span>
          </span>
        </a>
        <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
            <span className="transform group-hover:scale-110 transition-transform">
              TW
            </span>
          </span>
        </a>
      </div>
      <div className="mt-6 flex justify-center space-x-4 text-xs text-beautyagent-medium-grey/60">
        <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Terms</a>
        <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Privacy</a>
        <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
