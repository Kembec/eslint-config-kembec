import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importXPlugin from "eslint-plugin-import-x";
import globals from "globals";

import bestPractices from "../rules/best-practices.js";
import errors from "../rules/errors.js";
import { importXRules, pluginInstances, pluginRules } from "../rules/plugins.js";
import style from "../rules/style.js";

export function buildJsPreset() {
	return [
		js.configs.recommended,
		prettierConfig,
		{
			files: ["**/*.{js,jsx,mjs,cjs}"],
			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				globals: {
					...globals.browser,
					...globals.es2022,
					...globals.node,
				},
			},
			plugins: {
				...pluginInstances,
				"import-x": importXPlugin,
			},
			rules: {
				...bestPractices.rules,
				...errors.rules,
				...style.rules,
				...pluginRules,
				...importXRules,
			},
		},
	];
}

export default buildJsPreset();
