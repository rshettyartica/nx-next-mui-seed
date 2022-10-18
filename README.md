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

## NX References

- [Integrated vs package-based](https://nx.dev/concepts/integrated-vs-package-based)
