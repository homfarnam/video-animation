export interface VideoMetadata {
  width: number;
  height: number;
  duration: number;
}

export interface DebugInfo extends Record<string, unknown> {
  backgroundVideo: VideoMetadata | null;
  foregroundVideo: VideoMetadata | null;
  foregroundStartTime: string | null;
}
