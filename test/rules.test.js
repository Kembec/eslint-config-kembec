import { ESLint } from "eslint";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function lintCode(config, code, filename = "input.js") {
	const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: config });
	const results = await eslint.lintText(code, { filePath: resolve(__dirname, filename) });
	return results[0];
}

describe("defineConfig — structure", () => {
	test("js preset returns non-empty array", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "js" });
		expect(Array.isArray(config)).toBe(true);
		expect(config.length).toBeGreaterThan(0);
	});

	test("ts preset returns non-empty array", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "ts" });
		expect(Array.isArray(config)).toBe(true);
		expect(config.length).toBeGreaterThan(0);
	});

	test("react preset returns non-empty array", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "react" });
		expect(Array.isArray(config)).toBe(true);
		expect(config.length).toBeGreaterThan(0);
	});

	test("vue preset returns non-empty array", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "vue" });
		expect(Array.isArray(config)).toBe(true);
		expect(config.length).toBeGreaterThan(0);
	});

	test("invalid preset throws synchronously with package name in message", async () => {
		const { defineConfig } = await import("../index.js");
		expect(() => defineConfig({ preset: "invalid" })).toThrow("@kembec/eslint-config");
	});

	test("all presets include vitest overlay", async () => {
		const { defineConfig } = await import("../index.js");
		for (const preset of ["js", "ts", "react", "vue"]) {
			const config = defineConfig({ preset });
			const hasVitest = config.some((c) => c.plugins && "vitest" in c.plugins);
			expect(hasVitest).toBe(true);
		}
	});

	test("ts preset includes @typescript-eslint plugin", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "ts" });
		const hasTsPlugin = config.some((c) => c.plugins && "@typescript-eslint" in c.plugins);
		expect(hasTsPlugin).toBe(true);
	});

	test("react preset includes react and react-hooks plugins", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "react" });
		const hasReact = config.some((c) => c.plugins && "react" in c.plugins);
		const hasReactHooks = config.some((c) => c.plugins && "react-hooks" in c.plugins);
		expect(hasReact).toBe(true);
		expect(hasReactHooks).toBe(true);
	});

	test("vue preset includes vue plugin", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "vue" });
		const hasVue = config.some((c) => c.plugins && "vue" in c.plugins);
		expect(hasVue).toBe(true);
	});

	test("vue preset includes @typescript-eslint plugin", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "vue" });
		const hasTsPlugin = config.some((c) => c.plugins && "@typescript-eslint" in c.plugins);
		expect(hasTsPlugin).toBe(true);
	});

	test("js preset includes import-x plugin", async () => {
		const { defineConfig } = await import("../index.js");
		const config = defineConfig({ preset: "js" });
		const hasImportX = config.some((c) => c.plugins && "import-x" in c.plugins);
		expect(hasImportX).toBe(true);
	});
});

describe("defineConfig — js preset lint rules", () => {
	let jsConfig;

	beforeAll(async () => {
		const { defineConfig } = await import("../index.js");
		jsConfig = defineConfig({ preset: "js" });
	});

	test("valid code passes without errors", async () => {
		const result = await lintCode(
			jsConfig,
			`const x = 1;\nif (x === 1) {\n\tconsole.error("test");\n}\n`,
		);
		expect(result.errorCount).toBe(0);
	});

	test("eqeqeq: catches == operator", async () => {
		const result = await lintCode(jsConfig, `const x = 1;\nif (x == 1) {\n\tconsole.error("x");\n}\n`);
		const rule = result.messages.find((m) => m.ruleId === "eqeqeq");
		expect(rule).toBeDefined();
	});

	test("no-console: blocks console.log", async () => {
		const result = await lintCode(jsConfig, `const x = 1;\nconsole.log(x);\n`);
		const rule = result.messages.find((m) => m.ruleId === "no-console");
		expect(rule).toBeDefined();
	});

	test("prefer-const: catches let that could be const", async () => {
		const result = await lintCode(jsConfig, `let x = 1;\nconsole.error(x);\n`);
		const rule = result.messages.find((m) => m.ruleId === "prefer-const");
		expect(rule).toBeDefined();
	});

	test("no-var: catches var declarations", async () => {
		const result = await lintCode(
			jsConfig,
			`var x = 1;\nif (x === 1) {\n\tconsole.error("x");\n}\n`,
		);
		const rule = result.messages.find((m) => m.ruleId === "no-var");
		expect(rule).toBeDefined();
	});

	test("no-unused-vars: warns on unused variable", async () => {
		const result = await lintCode(jsConfig, `const unused = 1;\nconsole.error("ok");\n`);
		const rule = result.messages.find(
			(m) => m.ruleId === "unused-imports/no-unused-vars" || m.ruleId === "no-unused-vars",
		);
		expect(rule).toBeDefined();
	});

	test("prefer-template: catches string concatenation", async () => {
		const result = await lintCode(jsConfig, `const x = 1;\nconsole.error("value: " + x);\n`);
		const rule = result.messages.find((m) => m.ruleId === "prefer-template");
		expect(rule).toBeDefined();
	});
});
