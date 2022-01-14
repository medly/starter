# 🖥️ Create API

A platform to generate backend applications using ExpressJS.

## Getting Started
- **NPM** is used to publish, discover, install, and develop node programs.
- **Yarn** provides speed, consistency, stability, and security.
- **PNPM** offers significantly better disk space usage and speed.

| Package Manager | Command                  |
| --------------- | ------------------------ |
| NPM             | `npm init @medly/api`    |
| Yarn            | `yarn create @medly/api` |
| PNPM            | `pnpx @medly/create-api` |

Follow the prompts or run command `yarn create @medly/api <project-name> [options]` with the below options.

**Options Available**
| Flags                                     | Description                    | Choices                    | Default |
| ----------------------------------------- | ------------------------------ | -------------------------- | ------- |
| `-V, --version`                           | output the version number      |                            |         |
| `-p, --package-manager <package-manager>` | package manager                | `npm`, `yarn`, `pnpm`      | `yarn`  |
| `-p, --language <language>`               | language                       | `javascript`, `typescript` |
| `-i, --interactive`                       | show interactive questionnaire |                            |         |
| `-h, --help`                              | display help for command       |                            |         |

## Features
1. `jest` to write `unit tests`.
2. `prettier` to automatically `format` the code.
3. `eslint` to catch the error.

## Directory Layout 
├── build/                         # Compiled output
├── migrations/                    # Database schema migration files
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.
├── scripts/                       # Automation scripts (yarn update-schema etc.)
├── src/                           # Application source code
│   ├── admin/                     # Admin section (Dashboard, User Management etc.)
│   ├── common/                    # Shared React components and HOCs
│   ├── hooks/                     # React.js hooks and Context providers
│   ├── icons/                     # Icon components
│   ├── legal/                     # Terms of Use, Privacy Policy, etc.
│   ├── misc/                      # Other pages (about us, contacts, etc.)
│   ├── mutations/                 # GraphQL mutations to be used on the client
│   ├── news/                      # News section (example)
│   ├── server/                    # Server-side code (API, authentication, etc.)
│   │   ├── mutations/             # GraphQL mutations
│   │   ├── queries/               # The top-level GraphQL query fields
│   │   ├── templates/             # HTML templates for server-side rendering
│   │   ├── types/                 # GraphQL types: User, UserRole, UserIdentity etc.
│   │   ├── api.js                 # GraphQL API middleware
│   │   ├── app.js                 # Express.js application
│   │   ├── config.js              # Configuration settings to be passed to the client
│   │   ├── context.js             # GraphQL context wrapper
│   │   ├── db.js                  # PostgreSQL database client (Knex.js)
│   │   ├── relay.js               # Relay factory method for Node.js environment
│   │   ├── index.js               # Node.js app entry point
│   │   ├── login.js               # Authentication middleware (e.g. /login/facebook)
│   │   ├── schema.js              # GraphQL schema
│   │   └── ssr.js                 # Server-side rendering, e.g. ReactDOMServer.renderToString(<App />)
│   ├── user/                      # User pages (login, account settings, user profile, etc)
│   ├── utils/                     # Utility functions
│   ├── relay.js                   # Relay factory method for browser environment
│   ├── index.js                   # Client-side entry point, e.g. ReactDOM.render(<App />, container)
│   ├── router.js                  # Universal application router
│   ├── serviceWorker.js           # Service worker helper methods
│   └── theme.js                   # Overrides for Material UI default styles
├── ssl/                           # SSL certificates for connecting to Cloud SQL instance
├── .env                           # Environment variables for local development
├── .env.production                # Environment variables for the production build
├── .env.test                      # Environment variables for the test build
├── graphql.schema                 # GraphQL schema (auto-generated, used by Relay)
└── package.json                   # The list of project dependencies + NPM scripts

## How to Test
$ yarn lint                        # Check JavaScript and CSS code for potential issues
$ yarn lint-fix                    # Attempt to automatically fix ESLint warnings
$ yarn test                        # Run unit tests. Or, `yarn test -- --watch`

## How to Deploy
$ yarn build                       # Build the in production mode (NODE_ENV=production)
$ yarn deploy-test                 # Deploy the app to TEST environment
$ yarn deploy-prod                 # Deploy the app to PROD environment
