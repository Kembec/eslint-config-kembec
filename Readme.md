# Streamlined ESLint Configuration for JS/TS Projects

This document outlines how to integrate my ESLint setup into your JavaScript or TypeScript projects. It's a personal collection of configurations and plugins designed to enforce a consistent coding style and catch common errors.

## Quick Start Guide

### Step 1: Installation

Add the configuration package to your development dependencies:

```bash
npm install -D @kembec/eslint-config
```

### Step 2: Configure ESLint

Modify your ESLint configuration file to use this package. The setup varies slightly depending on whether you're working with plain JavaScript or TypeScript.

- **For JavaScript Projects**: In your `.eslintrc` file (which could be `.json`, `.js`, or `.ts`), include the following setup. To use Jest, change the extends value as shown in the comment:

```json
{
  "extends": ["@kembec/eslint-config"] // To use Jest, change to "@kembec/eslint-config/jest"
}
```

- **For TypeScript Projects**: To include TypeScript-specific rules and configure parser options, use the following setup. To use Jest, modify the extends value as shown in the comment:

```json
{
  "extends": ["@kembec/eslint-config/typescript"], // To use Jest, change to "@kembec/eslint-config/typescript/jest"
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }
  ]
}
```

- **For React Projects**:

```json
{
  "extends": [
    "@kembec/eslint-config/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs", "vite.config.ts"],
  "overrides": [
    {
      "files": ["src/**/*.ts", "src/**/*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }
  ]
}
```

## Included Plugins


The configuration incorporates a carefully selected set of ESLint plugins to assist with various code quality and style concerns:

- `eslint-plugin-import`: Manages and validates import statements.
- `eslint-plugin-jest`: Provides linting rules for Jest tests.
- `eslint-plugin-prettier`: Integrates Prettier formatting into ESLint.
- `eslint-plugin-simple-import-sort`: Automatically sorts import statements.
- `eslint-plugin-unused-imports`: Helps in removing unused imports.
- `@typescript-eslint/eslint-plugin`: Adds TypeScript-specific linting rules.
- `@typescript-eslint/parser`: Allows ESLint to parse TypeScript code.

These plugins are intended to help maintain a clean codebase and promote coding best practices.

## Usage

Integrate linting into your workflow with these npm scripts:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint --fix ."
}
```

Use `npm run lint` to identify issues or `npm run lint:fix` to fix many issues automatically.

## License

This project is licensed under the [AGPL-3.0](https://opensource.org/licenses/AGPL-3.0). Its use, modification, and distribution are allowed under the terms of this license.