# Habit Tracker Template

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

Clone it directly:

```bash
git clone https://github.com/NotNotEvan/simplified-habit-tracker.git my-habit-lab
cd my-habit-lab
```

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

## Contributing

Learning-focused improvements are welcome. Keep changes small, explain the
concept they demonstrate, and run the formatting, linting, and build checks
before opening a pull request.

## License

This project is available under the [MIT License](LICENSE).
