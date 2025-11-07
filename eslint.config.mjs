import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // --- Reduce React strictness ---
      "react-hooks/exhaustive-deps": "warn", // keep as a gentle reminder
      "react-hooks/set-state-in-effect": "off", // too aggressive for most projects
      "react/no-unescaped-entities": "off", // allow apostrophes etc. in text
      "react/display-name": "off",
      "react/jsx-key": "warn",
      "react/no-unknown-property": "warn",

      // --- Accessibility: nice-to-haves, not blockers ---
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "off",

      // --- General sanity checks ---
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "no-debugger": "warn",
      "no-undef": "error",

      // --- Next.js specific ---
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
