import { buildJsPreset } from "./presets/js.js";
import { buildReactPreset } from "./presets/react.js";
import { buildTsPreset } from "./presets/ts.js";
import vitestPreset from "./presets/vitest.js";
import { buildVuePreset } from "./presets/vue.js";

const PRESETS = ["js", "ts", "react", "vue"];

export function defineConfig({ preset = "ts", tsconfigPath = "./tsconfig.json" } = {}) {
	if (!PRESETS.includes(preset)) {
		throw new Error(`@kembec/eslint-config: preset "${preset}" is not valid. Use: ${PRESETS.join(", ")}`);
	}

	const base = {
		js: () => buildJsPreset(),
		ts: () => buildTsPreset(tsconfigPath),
		react: () => buildReactPreset(tsconfigPath),
		vue: () => buildVuePreset(tsconfigPath),
	}[preset]();

	return [...base, ...vitestPreset];
}
