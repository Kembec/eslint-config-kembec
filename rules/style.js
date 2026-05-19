import stylisticPlugin from "@stylistic/eslint-plugin";

export const stylisticPluginInstance = { "@stylistic": stylisticPlugin };

export default {
	rules: {
		curly: "error",
		"@stylistic/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
		"@stylistic/padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
	},
};
