import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "public", "images");
mkdirSync(outDir, { recursive: true });

// Soft coastal / sage-teal palette to sit neutrally behind real photography later
const palettes = [
  ["#CFE0DA", "#9CC0B6"],
  ["#DCE6DE", "#A9C7B8"],
  ["#D7E3E0", "#8FB6AC"],
  ["#E4E9DE", "#B7CBAE"],
  ["#CDE1DC", "#7FA79B"],
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svgFor(w, h, label, sub, idx) {
  label = esc(label);
  sub = esc(sub);
  const [c1, c2] = palettes[idx % palettes.length];
  const fontSize = Math.max(20, Math.round(w * 0.032));
  const subSize = Math.max(14, Math.round(w * 0.018));
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <circle cx="${w * 0.82}" cy="${h * 0.18}" r="${Math.min(w, h) * 0.12}" fill="#ffffff" opacity="0.18"/>
    <circle cx="${w * 0.12}" cy="${h * 0.85}" r="${Math.min(w, h) * 0.18}" fill="#ffffff" opacity="0.12"/>
    <text x="50%" y="48%" font-family="Georgia, serif" font-size="${fontSize}" fill="#2f3e39" text-anchor="middle" opacity="0.85">${label}</text>
    <text x="50%" y="56%" font-family="Arial, sans-serif" font-size="${subSize}" fill="#2f3e39" text-anchor="middle" opacity="0.55">${sub}</text>
  </svg>`;
}

const images = [
  { name: "hero-1", w: 900, h: 1125, label: "Placeholder image", sub: "hero \u2013 family (4:5)" },
  { name: "hero-2", w: 720, h: 900, label: "Placeholder image", sub: "hero \u2013 child (4:5)" },
  { name: "intro-banner", w: 1920, h: 900, label: "Placeholder image", sub: "intro banner (16:7.5)" },
  { name: "who-adults", w: 800, h: 1000, label: "Placeholder image", sub: "adults (4:5)" },
  { name: "who-couples", w: 800, h: 1000, label: "Placeholder image", sub: "couples (4:5)" },
  { name: "who-children", w: 800, h: 1000, label: "Placeholder image", sub: "children & teens (4:5)" },
  { name: "how-we-work-1", w: 900, h: 1125, label: "Placeholder image", sub: "how we work (4:5)" },
  { name: "how-we-work-2", w: 1600, h: 1000, label: "Placeholder image", sub: "family sunset (8:5)" },
  { name: "specialties-closing", w: 1600, h: 900, label: "Placeholder image", sub: "closing visual (16:9)" },
  { name: "schedule-cta", w: 900, h: 1125, label: "Placeholder image", sub: "schedule CTA (4:5)" },
];

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const svg = svgFor(img.w, img.h, img.label, img.sub, i);
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82 })
    .toFile(path.join(outDir, `${img.name}.jpg`));
  console.log(`wrote ${img.name}.jpg (${img.w}x${img.h})`);
}
