import { defineConfig } from "./index.js";

export default [{ ignores: ["coverage/**", "test/**"] }, ...defineConfig({ preset: "js" })];
