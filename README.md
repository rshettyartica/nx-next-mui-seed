# NX

Tool to organise projects and shared libs within a single repository.

## Important commands

### Workspace Creation

```bash
npx create-nx-workspace@latest --preset=next --packageManager=yarn
```

### Serve the app

```bash
npx nx serve stoke-ui
```

### Create a new page

```bash
npx nx generate @nrwl/next:page --name=about --style=css
```

### Create a new dynamic page

```bash
npx nx generate @nrwl/next:page --name="[id]" --style=none --directory=user
```

### Create a scoped library

```bash
npx nx g lib ui --directory=shared --component=false
```

### Create a component within scoped library

```bash
npx nx g component toolbar --project=shared-ui -e
```

Under the shared-ui directory, create the toolbar component and export it from the index.ts file.

### Remove a library

```bash
npx nx g rm button --dry-run
```

Dry run will not remove the library directly, but will show you what will be removed.

### Storybook configuration

```bash
nx g @nrwl/react:storybook-configuration project-name
```

## Important concepts

### NX Terminologies

- **Workspace**
  A folder created using Nx that contain applications and libraries, as well as scaffolding to help with building, linting, and testing.
- **Project**
  An application or library within the workspace.
- **Application**
  A package that uses multiple libraries to form a runnable program.
- **Library**
  A set of files that deal with related concerns. For example, a shared component UI library.

### NX Library Types

- **Feature**
  Libraries that implement “smart” UI (e.g. is effectful, is connected to data sources, handles routing, etc.) for specific business use cases.
- **UI**
  Libraries that contain only presentational components. That is, components that render purely from their props, and calls function handlers when interaction occurs.
- **Data-access**
  Libraries that contain the means for interacting with external data services;
  external services are typically backend services.
- **Utility**
  Libraries that contain common utilities that are shared by many projects.

### NX Library Scoped Grouping

A library scope is:

- a logical grouping to organize libraries semantically
- represented by a directory

The goal of a scope is to provide insights in what part of the logic a library deals with, so that:

- all team members can immediately see from the scope whether or not they can consume a library in their application or library
- the maintainers of the library know exactly which applications and libraries can depend on their library and have full awareness of the impact of their changes when they update a library

To name a scope, we use the following rules:

- If a library is built specifically for use in one application, its scope is the application name e.g. "stoke-ui", "decoder-ui".
- If a library is built specifically for use in all applications and libraries, its scope is "shared".

## NX References

- [Integrated vs package-based](https://nx.dev/concepts/integrated-vs-package-based)
- [Grouping Libraries](https://nx.dev/more-concepts/grouping-libraries)
