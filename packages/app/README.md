# Create Web App

An application for generating simple react app.

## Getting started

| Package Manager | Command                  |
| --------------- | ------------------------ |
| NPM             | `npm init @medly/app`    |
| Yarn            | `yarn create @medly/app` |
| PNPM            | `pnpx @medly/create-app` |

Then follow the prompts or you can run command `yarn create @medly/app <project-name> [options]` with below options.

### Options

| Flags                                     | Description                    | Choices               | Default |
| ----------------------------------------- | ------------------------------ | --------------------- | ------- |
| `-V, --version`                           | output the version number      |                       |         |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm` | `yarn`  |
| `-i, --interactive`                       | show interactive questionnaire |                       |         |
| `-h, --help`                              | display help for command       |                       |         |

## Features

1. It sets up `babel` to `transpile` the code.
2. it sets up `jest` to write `unit tests`.
3. It sets up `webpack` to `bundle` the code.
4. It sets up `prettier` to automatically `format` the code.
5. It sets up `eslint` to catch the error.
6. It sets up `@medly-components` with theme.
7. It sets up `redux` to store the app state.
8. It provides basic `layout` also.
