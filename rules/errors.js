module.exports = {
	rules: {
		"array-callback-return": ["error", { checkForEach: true }],
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",
		"no-use-before-define": [
			"error",
			{
				classes: true,
				functions: false,
				variables: true,
				allowNamedExports: false,
			},
		],
		"require-atomic-updates": "error",
	},
};
