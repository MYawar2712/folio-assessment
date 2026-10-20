# Folio Architecture Note

## Overview

Folio is a single-page React application built with Vite. It intentionally focuses on a complete product slice for document creation, editing, importing, sharing, and persistence.

## Data flow

The document collection is the client-side source of truth. The selected document is rendered in a content-editable editor. Editor changes update the selected document, while a React effect persists the collection to `localStorage`. This allows documents and sharing state to survive refreshes without requiring a paid backend service.

## Main surfaces

- Document library: selection, search, creation, and import.
- Editor: title editing, content editing, and basic rich-text commands.
- Share modal: seeded teammate selection and visible shared state.
- Persistence: browser local storage keyed by `folio-docs`.

## Scope decisions

Plain text and Markdown import were chosen because they are reliable to parse within the timebox. Rich text is stored as HTML so headings, lists, and inline formatting survive refreshes. Authentication, real-time collaboration, server-side authorization, comments, version history, and export were deferred to keep the core workflow coherent.

## Verification

The project includes a Vitest smoke test and is verified with `npm test` and `npm run build`.
