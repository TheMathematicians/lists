# Issues faced during development

## Using styled components' `ThemeProvider`

### Issue

![Error while using styled components' ThemeProvider](./issues/UsingThemeProvider-StyledComponents.png)

### Resolution

After going to the definition of the `ThemeProviderProps` found a comment saying **_only one child is allowed_**. Moved every element inside `Wrapper` component nad used `Wrapper` as the _only_ child of `ThemeProvider`.

## While running unit tests with `ts-jest`

### Issue

Typescript Jest Tests run very slow.

### Resolution

Run `react-scripts test` _**`--maxWorkers=1`**_

### Ref

https://github.com/kulshekhar/ts-jest/issues/259#issuecomment-504088010


## TypeScript version mismatch for `typescript-estree`

### Issue

![TypeScript version mismatch](./issues/TypescriptVersionMismatch.png)

### Resolution

Installed `3.4.5` version of TypeScript.

## Styled Components + TypeScript - missing proper debugging

### Issue

![Styled Components + TypeScript - missing proper debugging](./issues/TypeScriptStyledComponentsDebuggingIssue.png)

### Resolution

Install `babel-plugin-macros` and import from `styled-components/macro`.

### Ref

https://www.styled-components.com/docs/tooling#babel-macro