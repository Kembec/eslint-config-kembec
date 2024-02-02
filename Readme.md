# My personal JavaScript/TypeScript linter configuration


## Getting Start

- Install 
    ```
    npm install -D @kembec/eslint-config
    ```

- Add in the .eslintrc{,.js,.ts} file
    ```
    extends: [ "@kembec/eslint-config" ] 
    ```
    
- If you use TypeScript
    ```
    {
	    extends: ["@kembec/eslint-config/typescript"],
        overrides: [
            {
                files: ["*.ts", "*.tsx"],
                parserOptions: {
                    project: ["./tsconfig.json"],
                },
            },
        ]
    }
    ```


## Plugins Included

- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-prettier
- eslint-plugin-simple-import-sort
- eslint-plugin-unused-import
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
