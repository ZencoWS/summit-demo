/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";

export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Relume's preset uses percentage values here, which Tailwind emits as
    // invalid media-query breakpoints. The base container is already 100%
    // wide, so only cap it at Relume's pixel-based breakpoints.
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // These aliases feed the existing Relume UI component classes.
        background: {
          primary: "#ffffff",
          secondary: "#fefefe",
          alternative: "#23574f",
        },
        text: {
          primary: "#2f393f",
          secondary: "#327b70",
          alternative: "#ffffff",
        },
        border: {
          primary: "#2f393f",
          "ink-5": "#2f393f0d",
          alternative: "#ffffff",
        },
        summit: {
          charcoal: "#2f393f",
          green: "#23574f",
          "green-light": "#327b70",
          "green-lighter": "#40a091",
          "green-lightest": "#6ac3b5",
          "green-dark": "#173a35",
          "green-darker": "#0d201d",
          "green-darkest": "#030706",
          white: "#ffffff",
          "off-white": "#fefefe",
          "charcoal-5": "#2f393f0d",
          transparent: "#ffffff00",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Roboto Condensed", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "summit-body": ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "summit-h1": ["2.5rem", { lineHeight: "1.1", letterSpacing: "0.025em", fontWeight: "700" }],
        "summit-h6": ["1.125rem", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "700" }],
      },
      borderRadius: {
        "summit-button": "0.75rem",
        "summit-control": "0.5rem",
      },
      maxWidth: {
        "summit-medium": "35rem",
        "summit-large": "48rem",
      },
      spacing: {
        "summit-page": "1.25rem",
        "summit-section": "4rem",
      },
      backgroundImage: {
        "summit-primary": "linear-gradient(133.07deg, #23574f 0%, #6ac3b5 100%)",
      },
    },
  },
  plugins: [],
  presets: [relumeTailwind]
};
