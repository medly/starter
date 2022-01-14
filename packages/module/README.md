# 🧩 Create Module

A platform to generate simple modules or applications. Choose between `typescript` or `javascript` language.

## Getting Started
- **NPM** is used to publish, discover, install, and develop node programs.
- **Yarn** provides speed, consistency, stability, and security.
- **PNPM** offers significantly better disk space usage and speed.

| Package Manager | Command                     |
| --------------- | --------------------------- |
| NPM             | `npm init @medly/module`    |
| Yarn            | `yarn create @medly/module` |
| PNPM            | `pnpx @medly/create-module` |

Follow the prompts or run command `yarn create @medly/module <project-name> [options]` with the below options.

**Options Available**
| Flags                                     | Description                    | Choices                    | Default      |
| ----------------------------------------- | ------------------------------ | -------------------------- | ------------ |
| `-V, --version`                           | output the version number      |                            |              |
| `-o, --org <org>`                         | name of the organization       |                            |              |
| `-r, --registry <registry>`               | registry to publish the module | `npm`, `github`, `none`    | `none`       |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm`      | `yarn`       |
| `-a, --access <access>`                   | access level of the module     | `public`, `restricted`     | `public`     |
| `-l, --language <language>`               | language                       | `typescript`, `javascript` | `typescript` |
| `-i, --interactive`                       | show interactive questionnaire |                            |              |
| `-h, --help`                              | display help for command       |                            |              |

> **Note:** Add `NPM_TOKEN` as secret in github repo to publish the package.

## Features
1. `babel` to `transpile` the code.
2. `jest` to write `unit tests`.
3. `rollup` to `bundle` the code.
4. `commitizen` & `commitlint` to optimize your commit message.
5. `prettier` to automatically `format` the code.
6. `eslint` to catch the error.
7. `github workflow` to automatically `publish the package on PR merge`.
8. `semantic-release` to bump the version and update the `CHANGELOG`.
9. `typescript` also, if you choose `typescript` as language option.

![create-module](https://user-images.githubusercontent.com/3636885/123096440-bab59f00-d44c-11eb-9df0-412145d21abc.gif)
