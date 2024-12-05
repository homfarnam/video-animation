import { useCallback } from "react";

export const useVideoSync = (
  foregroundTopRef: React.RefObject<HTMLVideoElement>,
  foregroundBottomRef: React.RefObject<HTMLVideoElement>
) => {
  return useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const targetVideo = event.currentTarget;
      const isTop = targetVideo === foregroundTopRef.current;
      const otherVideo = isTop
        ? foregroundBottomRef.current
        : foregroundTopRef.current;

      if (
        otherVideo &&
        Math.abs(targetVideo.currentTime - otherVideo.currentTime) > 0.1
      ) {
        otherVideo.currentTime = targetVideo.currentTime;
      }
    },
    [foregroundTopRef, foregroundBottomRef]
  );
};
