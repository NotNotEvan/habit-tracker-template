# Simplified Habit Tracker

A small, intentionally approachable habit tracker for learning modern frontend
development by extending a real application. Use it as a starting point for
experiments with React, TypeScript, styling, testing, persistence, APIs, and
other libraries you want to explore.

The project is deliberately limited in scope: it has enough structure to show
useful application patterns without hiding them behind a large framework.

## What the app does

- Creates and deletes habits.
- Marks a habit complete on individual days.
- Shows the current completion count and each habit's streak.
- Navigates through previous weeks while preventing future completions.
- Keeps state in memory so the data model remains easy to inspect and replace.

> [!NOTE]
> Habit data resets when the page reloads. Persistence is intentionally left as
> a learning exercise.

## Technology stack

| Technology                                                                                              | What this template demonstrates                                           |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [React 19](https://react.dev/)                                                                          | Components, composition, state, Context, custom hooks, and `use(Context)` |
| [TypeScript](https://www.typescriptlang.org/)                                                           | Typed props, domain models, exhaustive checks, and project references     |
| [Vite](https://vite.dev/)                                                                               | Local development, hot module replacement, and production builds          |
| [React Compiler](https://react.dev/learn/react-compiler)                                                | Compiler-driven React optimization through the Vite Babel integration     |
| [Tailwind CSS 4](https://tailwindcss.com/)                                                              | Utility-first styling and Vite integration                                |
| [date-fns](https://date-fns.org/)                                                                       | Date formatting, week calculations, comparisons, and streak logic         |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge)                                             | Reusable components with safely merged utility classes                    |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) | Fast linting and consistent formatting                                    |
| [Husky](https://typicode.github.io/husky/)                                                              | Running formatting and lint fixes before commits                          |

These are the tools already installed in the template. Libraries listed in the
[learning roadmap](#learning-roadmap) are optional ideas, not dependencies.

## Use this template

If this repository has GitHub's template setting enabled, select
**Use this template** on the repository page and create your own copy. You can
also clone it directly:

```bash
git clone https://github.com/NotNotEvan/simplified-habit-tracker.git my-habit-lab
cd my-habit-lab
```

Working in your own repository makes it easy to create a branch for each
experiment and compare different implementations without losing earlier work.

## Getting started

### Requirements

- Node.js `20.19+` or `22.12+`, as required by Vite 8
- npm (included with Node.js)

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Changes under `src/` will update in the
browser during development.

## Available commands

| Command             | Purpose                                                         |
| ------------------- | --------------------------------------------------------------- |
| `npm run dev`       | Start the Vite development server                               |
| `npm run build`     | Type-check the project and create a production build in `dist/` |
| `npm run preview`   | Serve the production build locally                              |
| `npm run lint`      | Check the source with Oxlint                                    |
| `npm run lint:fix`  | Fix supported lint issues                                       |
| `npm run fmt`       | Format supported project files with Oxfmt                       |
| `npm run fmt:check` | Check formatting without changing files                         |

`npm install` also prepares Husky. The included pre-commit hook runs the
formatter and applies supported lint fixes before a commit is created.

## Project structure

```text
.
├── public/                 Static assets copied into the build
├── src/
│   ├── components/         UI and layout components
│   ├── contexts/           Habit and calendar state providers
│   ├── hooks/              Typed access to each context
│   ├── types/              Shared domain types
│   ├── App.tsx             Provider composition and main screen
│   ├── index.css           Tailwind import and global styles
│   └── main.tsx            Browser entry point
├── vite.config.ts          Vite, React Compiler, and Tailwind setup
├── tsconfig.app.json       Browser TypeScript configuration and `@/` alias
└── package.json            Dependencies and development commands
```

The application is intentionally organized around a small provider hierarchy:

```text
main.tsx
└── App
    └── DateProvider
        └── HabitProvider
            └── AppLayout
                ├── Header
                ├── HabitForm
                └── HabitList
```

`DateProvider` must wrap `HabitProvider` because habit statistics and streaks
depend on the date context. Components consume both contexts through `useDate`
and `useHabit`, which also provide clear errors when used outside their
providers.

## Concepts to explore first

Start by tracing one interaction through the code:

1. `HabitForm` holds the input value in local component state.
2. Submitting the form calls `addHabit` from `useHabit`.
3. `HabitContext` updates the habits array with an immutable state update.
4. Context consumers render again with the new habit.
5. `HabitList` combines habit state with dates from `DateContext`.

Other useful details to investigate:

- Why `crypto.randomUUID()` is sufficient for client-created IDs here.
- How `date-fns` avoids hand-written calendar arithmetic.
- How the `Button` component combines variants with caller-provided classes.
- How `satisfies never` makes the variant switch exhaustive.
- How the `@/` TypeScript path alias keeps imports independent of file depth.
- Where derived values are calculated instead of stored as duplicate state.

## Learning roadmap

Treat each item as a separate experiment or branch. The order moves from small
frontend changes toward a full-stack application.

### 1. Practice component design

- Add editing, archiving, categories, or color labels to habits.
- Extract repeated UI into small components with typed props.
- Add more `Button` variants and accessible form labels.

**Learn:** component boundaries, props, controlled inputs, accessibility, and
design-system basics.

### 2. Add browser persistence

- Save habits to `localStorage` and restore them on startup.
- Decide how to serialize `Date` values and handle invalid saved data.
- Move persistence into a focused custom hook.

**Learn:** effects, initialization, serialization, migrations, and browser
storage APIs.

### 3. Add automated tests

- Use [Vitest](https://vitest.dev/) for the streak and date logic.
- Use
  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  to test the form and habit interactions from a user's perspective.
- Use [Playwright](https://playwright.dev/) for an end-to-end habit workflow.

**Learn:** unit, component, and browser testing at different levels of the
testing pyramid.

### 4. Add multiple screens

- Use [React Router](https://reactrouter.com/) for settings, history, and habit
  detail pages.
- Decide which state belongs in a URL, a provider, or a component.

**Learn:** routing, nested layouts, URL state, and navigation.

### 5. Connect an API

- Replace in-memory state with a small REST or GraphQL service.
- Use [TanStack Query](https://tanstack.com/query/latest) for fetching, caching,
  mutations, and loading or error states.
- Validate data at the application boundary with a schema library such as
  [Zod](https://zod.dev/).

**Learn:** client state versus server state, asynchronous UI, caching,
optimistic updates, and runtime validation.

### 6. Grow it into a production-style app

- Add authentication and user-specific habits.
- Store data in a database and introduce schema migrations.
- Add continuous integration for formatting, linting, tests, and builds.
- Deploy the frontend and API, then add monitoring and error reporting.

**Learn:** full-stack boundaries, security, delivery pipelines, observability,
and operational trade-offs.

## Suggested workflow

1. Pick one concept or library rather than changing several at once.
2. Write down the behavior you expect before implementing it.
3. Create a branch for the experiment.
4. Add or update tests when the behavior can be automated.
5. Run `npm run fmt:check`, `npm run lint`, and `npm run build`.
6. Record what you learned in the commit message or your own notes.

Small experiments make it easier to understand which tool solved which
problem—and whether the extra dependency was worth it.

## Contributing

Learning-focused improvements are welcome. Keep changes small, explain the
concept they demonstrate, and run the formatting, linting, and build checks
before opening a pull request.

## License

This project is available under the [MIT License](LICENSE).
