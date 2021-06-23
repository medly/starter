# Create Module

An application for generating either module or simple app. You can also choose between `typescript` & `javascript` language.

## Getting started

| Package Manager | Command                     |
| --------------- | --------------------------- |
| NPM             | `npm init @medly/module`    |
| Yarn            | `yarn create @medly/module` |
| PNPM            | `pnpx @medly/create-module` |

Then follow the prompts or you can run command `yarn create @medly/module <project-name> [options]` with below options.

### Options

| Flags                                     | Description                    | Choices                    | Default      |
| ----------------------------------------- | ------------------------------ | -------------------------- | ------------ |
| `-V, --version`                           | output the version number      |                            |              |
| `-o, --owner <owner>`                     | owner of the package           |                            |              |
| `-r, --registry <registry>`               | registry to publish the module | `npm`, `github`            |              |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm`      | `yarn`       |
| `-l, --language <language>`               | language                       | `typescript`, `javascript` | `typescript` |
| `-i, --interactive`                       | show interactive questionnaire |                            |              |
| `-h, --help`                              | display help for command       |                            |              |

> **Note:** Add `NPM_TOKEN` as secret in github repo to publish the package.

## Features

It sets up below things:

1. `babel` to `transpile` the code.
2. `jest` to write `unit tests`.
3. `rollup` to `bundle` the code.
4. `commitizen` & `commitlint` to optimize your commit message.
5. `github workflow` to automatically `publish the package on PR merge`.
6. `semantic-release` to bump the version and update the `CHANGELOG`.
7. `typescript` also, if you choose `typescript` as language option.


![create-module](https://user-images.githubusercontent.com/3636885/123096440-bab59f00-d44c-11eb-9df0-412145d21abc.gif)
