import { useEffect, useState } from "react";

interface UseVideoPlaybackProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
  autoPlay?: boolean;
}

export const useVideoPlayback = ({
  videoRef,
  onTimeUpdate,
  onEnded,
  autoPlay = true,
}: UseVideoPlaybackProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && onTimeUpdate) {
        onTimeUpdate(video.currentTime, video.duration);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    // Start playing video if autoPlay is true
    if (autoPlay) {
      video.play().catch(console.error);
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoRef, onTimeUpdate, onEnded, autoPlay]);

  return isPlaying;
};
