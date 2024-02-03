module.exports = {
	extends: ["../index.js"],
	overrides: [
		{
			files: ["*.test.js"],
			plugins: ["jest"],
			extends: ["plugin:jest/recommended"],
			rules: {},
		},
	],
};
