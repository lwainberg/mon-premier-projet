# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check (tsc -b) then bundle with Vite
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

No test runner is configured yet.

## Stack

- **React 19** + **TypeScript** (strict mode) bundled with **Vite 7**
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- `@vitejs/plugin-react` (Babel-based Fast Refresh)

## TypeScript config notes

`tsconfig.app.json` enforces strict settings including `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. All source files live under `src/` (currently empty — the project is at initialization stage).

## Environment

Running in WSL2 (Ubuntu 24.04) on Windows 11. IDE: Cursor, connected via `/ide cursor`. GitHub user: `lwainberg`.
