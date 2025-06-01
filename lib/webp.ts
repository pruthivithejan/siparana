import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// Supported image formats that cwebp can convert
const supportedFormats = [".png", ".jpg", ".jpeg", ".tiff", ".bmp"];

// Get public directory
const publicDir = path.join(process.cwd(), "public");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Get all files in the public directory
const files = fs.readdirSync(publicDir);

// Filter for supported image formats
const imageFiles = files.filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return supportedFormats.includes(ext);
});

console.log(`Found ${imageFiles.length} image(s) to convert`);

// Convert each image to WebP
imageFiles.forEach((file) => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(publicDir, `${path.parse(file).name}.webp`);

  try {
    // Run cwebp with some default options
    const cwebpPath = process.platform === 'win32' 
      ? path.join(__dirname, 'cwebp.exe')
      : path.join(__dirname, 'cwebp');
    const command = `"${cwebpPath}" -q 100 "${inputPath}" -o "${outputPath}"`;
    console.log(`Converting: ${file} -> ${path.basename(outputPath)}`);
    execSync(command);
    console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);

    // Delete the original file after successful conversion
    fs.unlinkSync(inputPath);
    console.log(`Deleted original file: ${file}`);
  } catch (error) {
    console.error(`Failed to convert ${file}:`, error);
  }
});

console.log("Conversion complete!");
