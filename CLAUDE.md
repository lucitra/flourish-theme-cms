# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a HubSpot CMS theme project built with React 18, TypeScript, and CSS Modules. The theme uses HubSpot Platform Version 2025.1 and integrates React components within HubL templates.

## Development Commands

```bash
# Start development server (from project root)
npm run start

# Alternative: Start from theme directory
cd src/theme && npm start

# Check code formatting
npm run prettier

# Deploy theme to HubSpot
npm run deploy
```

## Project Structure

```
src/theme/
├── components/modules/    # React component modules
├── styles/               # CSS modules
├── templates/            # HubL templates
│   ├── layouts/         # Base layout templates
│   └── *.hubl.html      # Page templates
├── assets/              # Static assets (images, SVG)
├── fields.json          # Global theme fields
└── theme.json           # Theme configuration
```

## Architecture Patterns

### React Component Modules

Components in `src/theme/components/modules/` follow this pattern:

```tsx
import { ModuleField } from '@hubspot/cms-components';

export const Component = ({ fieldValues, hublParameters }) => {
  // React component implementation
};

export const fields = [
  // Field definitions using JSX
];

export const meta = {
  label: 'Module Name'
};
```

### HubL Template Integration

Templates use `{% module %}` tags to render React components:

```hubl
{% module "unique_name" 
  path="@src/components/modules/ComponentName",
  field_name="value"
%}
```

### CSS Modules

- Located in `src/theme/styles/`
- Use `.module.css` extension
- Support CSS nesting and custom properties
- Imported in React components for scoped styling

## Key Configuration Files

- **hsproject.json**: HubSpot project configuration (platform version, source directory)
- **theme.json**: Theme metadata
- **fields.json**: Global theme fields accessible via `{{ theme.field_name }}`
- **tsconfig.json**: TypeScript configuration for React/Vitest

## Development Notes

- Requires Node.js >= 20.0.0
- Uses `@hubspot/cms-dev-server` for local development with hot reload
- HubSpot CLI (`hs`) is located at `/opt/homebrew/bin/hs`
- React components receive `fieldValues` (module fields) and `hublParameters` (HubL context)
- Global theme fields defined in fields.json are accessible in templates