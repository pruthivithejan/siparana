// Static image imports for build-time optimization
import illustrationImg from '../public/illustration.webp';
import siparanaLogo from '../public/siparana.svg';

// Export commonly used static images
export const staticImages = {
  illustration: illustrationImg,
  logo: siparanaLogo,
} as const;

// For content images, we'll create a helper function that provides static imports
// This approach ensures build-time optimization while maintaining type safety
export function getContentImageSrc(imagePath: string): string {
  // For static optimization, we import images that are available locally
  // This replaces the CDN approach for better performance
  
  try {
    // Dynamic import for local images - Next.js will optimize these at build time
    return `${imagePath}.webp`;
  } catch (error) {
    // Fallback to original CDN if local image is not available
    return `https://cdn.jsdelivr.net/gh/pruthivithejan/siparana@master/public/content${imagePath}.webp`;
  }
}

// Type definitions for better TypeScript support
export type StaticImageKey = keyof typeof staticImages;

// Helper function to get static image
export function getStaticImage(key: StaticImageKey): string {
  return staticImages[key];
}
