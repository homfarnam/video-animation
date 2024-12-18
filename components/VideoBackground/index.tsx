"use client";

import { useVideoPlayback } from "@/hooks/useVideoPlayback";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { ProgressIndicator } from "../ProgressIndicator";
import { ANIMATION_CONFIG } from "../ProgressIndicator/config";
import { HeroText } from "../HeroText.tsx";
import { useVideoSync } from "@/hooks/useVideoSync";

const VideoBackground = () => {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const foregroundTopRef = useRef<HTMLVideoElement>(null);
  const foregroundBottomRef = useRef<HTMLVideoElement>(null);

  const [showForeground, setShowForeground] = useState(false);
  const [isForegroundPlaying, setIsForegroundPlaying] = useState(false);

  const [backgroundProgress, setBackgroundProgress] = useState(0);
  const [foregroundProgress, setForegroundProgress] = useState(0);

  // Handle background video time updates
  const handleBackgroundTimeUpdate = useCallback(
    (currentTime: number, duration: number) => {
      setBackgroundProgress(currentTime / duration);
      console.log(`Background time: ${currentTime.toFixed(2)}s`);
    },
    []
  );

  // Handle foreground video time updates
  const handleForegroundTimeUpdate = useCallback(
    (currentTime: number, duration: number) => {
      if (isForegroundPlaying) {
        setForegroundProgress(currentTime / duration);
        console.log(`Foreground time: ${currentTime.toFixed(2)}s`);
      }
    },
    [isForegroundPlaying]
  );

  // Handle background video end
  const handleBackgroundEnded = useCallback(() => {
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
  }, []);

  // Synchronize video playback
  const syncVideos = useVideoSync(foregroundTopRef, foregroundBottomRef);

  useVideoPlayback({
    videoRef: backgroundVideoRef,
    onTimeUpdate: handleBackgroundTimeUpdate,
    onEnded: handleBackgroundEnded,
    autoPlay: true,
  });

  useVideoPlayback({
    videoRef: foregroundTopRef,
    onTimeUpdate: handleForegroundTimeUpdate,
    autoPlay: false,
  });

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={backgroundVideoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        playsInline
        src="/pharma.mp4"
      />

      <HeroText isSecondVideoStarted={isForegroundPlaying} />

      {/* Foreground Video */}
      <AnimatePresence>
        {showForeground && (
          <>
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: ANIMATION_CONFIG.foregroundSlide.delay,
                duration: ANIMATION_CONFIG.foregroundSlide.duration,
              }}
              className="absolute inset-x-0 top-0 h-1/2 overflow-hidden"
            >
              <video
                ref={foregroundTopRef}
                className="absolute inset-0 w-full h-[200%] object-cover"
                src="/tanks.mp4"
                muted
                playsInline
                style={{ top: 0 }}
                onTimeUpdate={syncVideos}
              />
            </motion.div>

            {/* Bottom Half */}
            <motion.div
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: ANIMATION_CONFIG.foregroundSlide.delay,
                duration: ANIMATION_CONFIG.foregroundSlide.duration,
              }}
              className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden"
            >
              <video
                ref={foregroundBottomRef}
                className="absolute inset-0 w-full h-[200%] object-cover"
                src="/tanks.mp4"
                muted
                playsInline
                onTimeUpdate={syncVideos}
                style={{ top: "-100%" }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ProgressIndicator
        backgroundProgress={backgroundProgress}
        foregroundProgress={foregroundProgress}
        showForeground={isForegroundPlaying}
      />
    </div>
  );
};

export default VideoBackground;
