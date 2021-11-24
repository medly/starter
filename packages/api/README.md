# Create Api

An application for generating api.

## Getting started

| Package Manager | Command                  |
| --------------- | ------------------------ |
| NPM             | `npm init @medly/api`    |
| Yarn            | `yarn create @medly/api` |
| PNPM            | `pnpx @medly/create-api` |

Then follow the prompts or you can run command `yarn create @medly/api <project-name> [options]` with below options.

### Options

| Flags                                     | Description                    | Choices                    | Default |
| ----------------------------------------- | ------------------------------ | -------------------------- | ------- |
| `-V, --version`                           | output the version number      |                            |         |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm`      | `yarn`  |
| `-p, --language <language>`               | package manager                | `javascript`, `typescript` |
| `-i, --interactive`                       | show interactive questionnaire |                            |         |
| `-h, --help`                              | display help for command       |                            |         |

## Features

It sets up below things:

1. `jest` to write `unit tests`.
2. `prettier` to automatically `format` the code.
3. `eslint` to catch the error.
