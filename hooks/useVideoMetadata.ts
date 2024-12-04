import { VideoMetadata } from "@/utils/types";
import { useEffect, useState } from "react";

export const useVideoMetadata = (
  videoRef: React.RefObject<HTMLVideoElement>
) => {
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateMetadata = () => {
      console.log({ video });
      setMetadata({
        width: video.videoWidth,
        height: video.videoHeight,
        duration: video.duration,
      });
    };

    video.addEventListener("loadedmetadata", updateMetadata);

    // Handle case where metadata is already loaded
    if (video.readyState >= 2) {
      updateMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", updateMetadata);
    };
  }, [videoRef]);

  return metadata;
};
