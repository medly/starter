# ⚛️ Create React component

An application for generating simple react component.

## Getting started

| Package Manager | Command                        |
| --------------- | ------------------------------ |
| NPM             | `npm init @medly/component`    |
| Yarn            | `yarn create @medly/component` |
| PNPM            | `pnpx @medly/create-component` |

Then follow the prompts or you can run command `yarn create @medly/component <project-name> [options]` with below options.

### Options

| Flags                                     | Description                    | Choices                | Default  |
| ----------------------------------------- | ------------------------------ | ---------------------- | -------- |
| `-V, --version`                           | output the version number      |                        |          |
| `-o, --org <org>`                         | name of the organization       |                        |          |
| `-r, --registry <registry>`               | registry to publish the module | `npm`, `github`        | `npm`    |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm`  | `yarn`   |
| `-a, --access <access>`                   | access level of the component  | `public`, `restricted` | `public` |
| `-i, --interactive`                       | show interactive questionnaire |                        |          |
| `-h, --help`                              | display help for command       |                        |          |

## Features

It sets up below things:

1. `storybook` for documentation.
2. `babel` to `transpile` the code.
3. `rollup` to bundle the code.
4. `jest` to write `unit tests`.
5. `prettier` to automatically `format` the code.
6. `eslint` to catch the error.
7. `@medly-components` with theme.
8. `commitizen` & `commitlint` to optimize your commit message.
9. `github workflow` to automatically `publish the package` on PR merge`.
10. `github workflow` to automatically `publish the documentation` on github pages on PR merge`.
11. `semantic-release` to bump the version and update the `CHANGELOG`.
