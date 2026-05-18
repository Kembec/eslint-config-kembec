export default {
	testEnvironment: "node",
	testMatch: ["**/test/**/*.test.js"],
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov"],
	verbose: true,
	transform: {},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
};
