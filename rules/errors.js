export default {
	rules: {
		"array-callback-return": ["error", { checkForEach: true }],
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-shadow-restricted-names": ["error", { reportGlobalThis: true }],
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-expressions": ["error", { ignoreDirectives: true }],
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
