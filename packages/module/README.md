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

| Flags                                   | Description                    | Choices                    | Default      |
| --------------------------------------- | ------------------------------ | -------------------------- | ------------ |
| -V, --version                           | output the version number      |                            |              |
| -o, --owner <owner>                     | owner of the package           |                            |              |
| -r, --registry <registry>               | registry to publish the module | `npm`, `github`            |              |
| -p, --package-manager <package-manager> | package manager                | `npm`, `yarn`, `pnpm`      | `yarn`       |
| -l, --language <language>               | language                       | `typescript`, `javascript` | `typescript` |
| -i, --interactive                       | show interactive questionnaire |                            |              |
| -h, --help                              | display help for command       |                            |              |
