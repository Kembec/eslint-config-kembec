module.exports = {
	plugins: ["simple-import-sort", "import", "unused-imports"],
	rules: {
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"import/no-unresolved": "error",
		"import/no-webpack-loader-syntax": "error",
		"prettier/prettier": ["error", { useTabs: true, printWidth: 100 }],
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
	},
};
