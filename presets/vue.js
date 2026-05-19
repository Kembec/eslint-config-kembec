import prettierConfig from "eslint-config-prettier";
import importXPlugin from "eslint-plugin-import-x";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";
import tseslint from "typescript-eslint";

import bestPractices from "../rules/best-practices.js";
import errors from "../rules/errors.js";
import { importXRules, pluginInstances, pluginRules } from "../rules/plugins.js";
import style from "../rules/style.js";
import typescriptRules from "../rules/typescript.js";

export function buildVuePreset(tsconfigPath = "./tsconfig.json") {
	return tseslint.config(
		prettierConfig,
		...tseslint.configs.recommendedTypeChecked,
		{
			files: ["**/*.{ts,tsx}"],
			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				globals: {
					...globals.browser,
					...globals.es2022,
					...globals.node,
				},
				parserOptions: {
					project: tsconfigPath,
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
				...typescriptRules.rules,
				...importXRules,
			},
		},
		...pluginVue.configs["flat/essential"],
		{
			files: ["**/*.vue"],
			languageOptions: {
				parser: vueParser,
				parserOptions: {
					parser: tseslint.parser,
					sourceType: "module",
				},
			},
		},
	);
}

export default buildVuePreset();
