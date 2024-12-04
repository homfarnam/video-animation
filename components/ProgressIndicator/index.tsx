import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ANIMATION_CONFIG } from "./config";

interface ProgressIndicatorProps {
  backgroundProgress: number;
  foregroundProgress: number;
  showForeground: boolean;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  backgroundProgress,
  foregroundProgress,
  showForeground,
}) => {
  return (
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
      {/* Base line */}
      <div className="w-full h-[0.5px] bg-white/20" />

      {/* Progress lines */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {!showForeground ? (
            /* Background video progress */
            <motion.div
              key="background"
              className="absolute top-0 left-0 h-[1px] bg-white origin-left"
              initial={{ width: "0%" }}
              animate={{ width: `${backgroundProgress * 100}%` }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: ANIMATION_CONFIG.progressTicker.ease,
              }}
            />
          ) : (
            /* Foreground video progress */
            <motion.div
              key="foreground"
              className="absolute top-0 left-0 h-[1px] bg-white origin-left"
              initial={{ width: "0%" }}
              animate={{ width: `${foregroundProgress * 100}%` }}
              transition={{
                duration: 1,
                ease: ANIMATION_CONFIG.progressTicker.ease,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
