# Bronkhorst Video Landing Page

A modern, animated landing page featuring synchronized video transitions and dynamic text animations. This project showcases a sophisticated video background system with split-screen effects and smooth animations.

## Features

- **Dynamic Video Transitions**
  - Seamless background to foreground video transitions
  - Split-screen video effect with synchronized playback
  - Smooth slide animations for video transitions

- **Interactive UI Elements**
  - Animated progress indicators
  - Dynamic text reveals
  - Responsive navigation controls
  - Elegant hover effects

- **Performance Optimized**
  - Efficient video playback management
  - Optimized animation performance
  - Synchronized video states

## Technology Stack

- **Core Technologies**
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS

- **Animation Libraries**
  - Framer Motion - For smooth animations and transitions
  - Lucide React - For high-quality icons

## Key Components

- **VideoBackground**: Main container component managing video states and transitions
- **BackgroundVideo**: Handles the initial full-screen video
- **ForegroundVideo**: Manages the split-screen video effect
- **HeroText**: Animated text overlays with sequential reveals
- **NavigationControls**: Interactive navigation elements
- **ProgressIndicator**: Visual feedback for video progress

## Custom Hooks

- **useVideoMetadata**: Handles video metadata loading
- **useVideoPlayback**: Manages video playback states
- **useVideoSync**: Ensures synchronized playback of split videos
- **useVideoTransition**: Manages smooth transitions between video states

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   or
   yarn dev
   ```

## Development

- **Code Style**: The project uses ESLint and TypeScript for code quality
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: React hooks for local state management
- **Animation**: Framer Motion for declarative animations

## Best Practices

- Component composition for maintainability
- Custom hooks for reusable logic
- TypeScript for type safety
- Performance optimization for video playback
- Modular architecture for scalability
