module.exports = {
	rules: {
		curly: "error",
		"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],
	},
};
