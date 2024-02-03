module.exports = {
	extends: ["../index.js"],
	overrides: [
		{
			files: ["*.test.ts"],
			plugins: ["jest"],
			extends: ["plugin:jest/recommended"],
			rules: {},
		},
	],
};
