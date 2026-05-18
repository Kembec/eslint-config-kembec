import prettierConfig from "eslint-config-prettier";
import importXPlugin from "eslint-plugin-import-x";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

import bestPractices from "../rules/best-practices.js";
import errors from "../rules/errors.js";
import { importXRules, pluginInstances, pluginRules } from "../rules/plugins.js";
import style from "../rules/style.js";
import typescriptRules from "../rules/typescript.js";

export function buildReactPreset(tsconfigPath = "./tsconfig.json") {
	return tseslint.config(prettierConfig, ...tseslint.configs.recommendedTypeChecked, {
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.es2022,
			},
			parserOptions: {
				project: tsconfigPath,
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			...pluginInstances,
			"import-x": importXPlugin,
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
		},
		settings: {
			react: { version: "detect" },
		},
		rules: {
			...bestPractices.rules,
			...errors.rules,
			...style.rules,
			...pluginRules,
			...typescriptRules.rules,
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			...importXRules,
		},
	});
}

export default buildReactPreset();
