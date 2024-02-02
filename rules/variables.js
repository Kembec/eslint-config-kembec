module.exports = {
	rules: {
		"no-var": "error",
		"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
		"no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
	},
};
