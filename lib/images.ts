// Static image imports for build-time optimization
// NOTE: In Next.js you normally don't import from public/ directly for runtime <Image src="/file" /> usage.
// Importing large sets of images increases bundle size. Keep only truly required imports here.
// For now we keep illustration via path to let Next handle it without bundling binary.

// Prefer just using path string instead of importing binary (avoids bundling the asset):
const illustrationImg = '/illustration.webp';
const siparanaLogo = '/siparana.svg';

// Export commonly used static images
export const staticImages = {
  illustration: illustrationImg,
  logo: siparanaLogo,
} as const;

// For content images, we'll create a helper function that provides static imports
// This approach ensures build-time optimization while maintaining type safety
export function getContentImageSrc(imagePath: string): string {
  // imagePath comes in like: /grade6/grade6-math
  // Files physically live in: public/content/grade6/grade6-math.webp
  // Public URL therefore must be: /content/grade6/grade6-math.webp
  const localPath = `/content${imagePath}.webp`;
  return localPath;
}

// Type definitions for better TypeScript support
export type StaticImageKey = keyof typeof staticImages;

// Helper function to get static image
export function getStaticImage(key: StaticImageKey): string {
  return staticImages[key];
}
