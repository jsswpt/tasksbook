import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sort from "eslint-plugin-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  { extends: [sort.configs["flat/recommended"], eslintConfigPrettier] },
  {
    rules: {
      "sort/imports": [
        "warn",
        {
          groups: [
            { order: 10, type: "side-effect" },
            { order: 20, type: "dependency" },
            { order: 30, regex: "^(.*)root(/)app$" },
            { order: 40, regex: "^(.*)root(/)screens(.*)$" },
            { order: 50, regex: "^(.*)root(/)screens(/)pages(.*)$" },
            { order: 60, regex: "^(.*)root(/)screens(/)modals(.*)$" },
            { order: 70, regex: "^(.*)root(/)widgets(/)(.*)$" },
            { order: 80, regex: "^(.*)root(/)features(/)(.*)$" },
            { order: 90, regex: "^(.*)root(/)entities(/)(.*)$" },
            { order: 100, regex: "^(.*)root(/)shared(/)(.*)$" },
            { order: 110, type: "other" },
            { order: 120, regex: "\\.(png|jpg|svg)$" },
          ],
          separator: "\n",
        },
      ],
    },
  },
  {
    files: ["**/index.ts"],
    rules: {
      "sort/exports": [
        "error",
        {
          caseSensitive: false,
          groups: [],
          natural: true,
          typeOrder: "preserve",
        },
      ],
    },
  },
);
