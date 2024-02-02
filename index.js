module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
	},
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		...["./rules/best-practices", "./rules/errors", "./rules/style", "./rules/plugins"].map(
			require.resolve,
		),
	],
};
