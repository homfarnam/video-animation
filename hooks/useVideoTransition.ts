import { ANIMATION_CONFIG } from "@/components/ProgressIndicator/config";
import { useCallback } from "react";

interface UseVideoTransitionProps {
  foregroundTopRef: React.RefObject<HTMLVideoElement>;
  foregroundBottomRef: React.RefObject<HTMLVideoElement>;
  setShowForeground: (show: boolean) => void;
  setIsForegroundPlaying: (playing: boolean) => void;
}

export const useVideoTransition = ({
  foregroundTopRef,
  foregroundBottomRef,
  setShowForeground,
  setIsForegroundPlaying,
}: UseVideoTransitionProps) => {
  return useCallback(() => {
    setShowForeground(true);
    setTimeout(() => {
      const startTime = new Date().toISOString();
      console.log(`Foreground video started at: ${startTime}`);
      setIsForegroundPlaying(true);

      // Play both top and bottom videos simultaneously
      Promise.all([
        foregroundTopRef.current?.play(),
        foregroundBottomRef.current?.play(),
      ]).catch(console.error);
    }, ANIMATION_CONFIG.foregroundSlide.delay * 1000);
  }, [
    foregroundTopRef,
    foregroundBottomRef,
    setShowForeground,
    setIsForegroundPlaying,
  ]);
};
