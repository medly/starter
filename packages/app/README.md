# ⚛️ Create Web App

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

It sets up below things:

1. `babel` to `transpile` the code.
2. `jest` to write `unit tests`.
3. `webpack` to `bundle` the code.
4. `prettier` to automatically `format` the code.
5. `eslint` to catch the error.
6. `@medly-components` with theme.
7. `redux` to store the app state.
8. Basic `PageLayout` with `Header`, `SideNav` & `PageContent` component.
