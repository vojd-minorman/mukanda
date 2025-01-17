import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Désactive les avertissements pour les entités non échappées
      "@typescript-eslint/no-unused-vars": "warn", // Change l'erreur pour les variables inutilisées en avertissement
    },
  },
];

export default eslintConfig;
