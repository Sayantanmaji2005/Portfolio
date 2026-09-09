/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",   // Clean light slate
        primary: "#2563EB",      // Royal Blue Accent
        secondary: "#06B6D4",    // Cyan Accent
        accent: "#06B6D4",       // Align to cyan
        textPrimary: "#0F172A",  // Slate-900
        textSecondary: "#475569",// Slate-600
        surface: "#FFFFFF",      // White surfaces
        borderMuted: "#E2E8F0",  // Slate-200
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-back 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'aurora-slow': 'aurora 25s ease infinite',
      },
      keyframes: {
        'spin-back': {
          '100%': { transform: 'rotate(-360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(124, 58, 237, 0.15)',
        'aurora-glow': '0 0 40px rgba(6, 182, 212, 0.15)',
      }
    },
  },
  plugins: [],
}
