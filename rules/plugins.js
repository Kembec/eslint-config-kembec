import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export const pluginInstances = {
	prettier: prettierPlugin,
	"simple-import-sort": simpleImportSortPlugin,
	"unused-imports": unusedImportsPlugin,
};

export const pluginRules = {
	"prettier/prettier": [
		"error",
		{
			arrowParens: "always",
			bracketSameLine: false,
			bracketSpacing: true,
			semi: true,
			experimentalTernaries: false,
			singleQuote: false,
			jsxSingleQuote: false,
			quoteProps: "as-needed",
			trailingComma: "es5",
			singleAttributePerLine: true,
			htmlWhitespaceSensitivity: "css",
			vueIndentScriptAndStyle: true,
			proseWrap: "preserve",
			insertPragma: false,
			printWidth: 120,
			requirePragma: false,
			tabWidth: 4,
			useTabs: true,
			embeddedLanguageFormatting: "auto",
			endOfLine: "lf",
		},
	],
	"simple-import-sort/exports": "error",
	"simple-import-sort/imports": "error",
	"unused-imports/no-unused-imports": "error",
	"no-unused-vars": "off",
	"unused-imports/no-unused-vars": [
		"warn",
		{
			vars: "all",
			varsIgnorePattern: "^_",
			args: "after-used",
			argsIgnorePattern: "^_",
		},
	],
};

export const importXRules = {
	"import-x/first": "error",
	"import-x/newline-after-import": "error",
	"import-x/no-duplicates": "error",
	"import-x/no-webpack-loader-syntax": "error",
};
