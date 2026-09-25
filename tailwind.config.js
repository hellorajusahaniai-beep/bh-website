import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      if (/\.(js|ts|jsx|tsx|html)$/.test(file)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = [
  path.join(__dirname, 'index.html'),
  ...getFiles(path.join(__dirname, 'src')),
];

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: files,
  },
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0E0E',
          2: '#171717',
          3: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#E8A33D',
          deep: '#B87526',
          pale: '#FBE3BD',
        },
        paper: '#FFFFFF',
        panel: '#F3F2EF',
        muted: {
          DEFAULT: '#63605B',
          lt: '#A9A6A0',
        },
        line: {
          DEFAULT: '#26241F',
          lt: '#E4E1DA',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(232, 163, 61, 0.3)',
        'glow-gold-lg': '0 0 35px rgba(232, 163, 61, 0.5)',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '12px',
      },
    },
  },
  plugins: [],
};
