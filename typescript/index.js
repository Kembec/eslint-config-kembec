module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	extends: ["../index.js"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript",
				...["../rules/typescript"].map(require.resolve),
			],
		},
		{
			files: ["*.ts"],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": ["error"],
			},
		},
	],
};
