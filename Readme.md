# @kembec/eslint-config

ESLint flat config presets for JS/TS/React projects. Covers import sorting, unused imports, Prettier, TypeScript type-checking, and Vitest.

## Install

```bash
pnpm add -D @kembec/eslint-config eslint
```

For TypeScript or React presets, also add:

```bash
pnpm add -D typescript
```

## Usage

Create `eslint.config.js` at your project root:

**JavaScript:**

```js
import { defineConfig } from "@kembec/eslint-config";

export default defineConfig({ preset: "js" });
```

**TypeScript:**

```js
import { defineConfig } from "@kembec/eslint-config";

export default defineConfig({ preset: "ts" });
```

**React + TypeScript:**

```js
import { defineConfig } from "@kembec/eslint-config";

export default defineConfig({ preset: "react" });
```

**Vue + TypeScript:**

```js
import { defineConfig } from "@kembec/eslint-config";

export default defineConfig({ preset: "vue" });
```

Includes TypeScript type-aware rules + `eslint-plugin-vue` essential rules. Parser for `.vue` files is configured automatically.

**Custom tsconfig path:**

```js
import { defineConfig } from "@kembec/eslint-config";

export default defineConfig({ preset: "ts", tsconfigPath: "./tsconfig.app.json" });
```

All presets include Vitest rules automatically.

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `preset` | `"ts"` | `"js"` \| `"ts"` \| `"react"` \| `"vue"` |
| `tsconfigPath` | `"./tsconfig.json"` | Path to tsconfig (ts/react/vue only) |

## Includes

- `typescript-eslint` — type-aware rules
- `eslint-plugin-import-x` — import validation
- `eslint-plugin-simple-import-sort` — automatic import sorting
- `eslint-plugin-unused-imports` — remove unused imports
- `eslint-plugin-prettier` — Prettier as ESLint rule
- `eslint-plugin-react` + `eslint-plugin-react-hooks` (react preset only)
- `eslint-plugin-vue` + `vue-eslint-parser` (vue preset only)
- `@vitest/eslint-plugin` — Vitest test rules

## License

[AGPL-3.0](https://opensource.org/licenses/AGPL-3.0)
