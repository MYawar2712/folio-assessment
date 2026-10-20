# Folio

Folio is a focused collaborative document editor MVP for the Ajaia take-home. It supports document creation, rename, rich text editing, browser persistence, `.txt`/`.md` import, and a seeded sharing flow.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal. Production build: `npm run build`.

## Product notes

- Documents and sharing metadata persist in `localStorage`, keeping this submission dependency-free and easy to review.
- Supported imports are `.txt` and `.md`; imported content becomes a new editable document.
- Sharing is intentionally lightweight: selecting a seeded teammate marks the document shared and shows that state in the library.
- Real-time collaboration, authentication, server-side persistence, permissions, comments, and export are intentionally out of scope for this timebox.

## Architecture

Single-page React app with a small state model. The document list is the source of truth; the active editor updates its document on input and persists the list through a localStorage effect. This prioritizes a complete, inspectable product slice over infrastructure that would add setup friction for reviewers.

## AI workflow

AI was used to accelerate scaffolding, UI copy, and implementation review. I retained product decisions and simplified generated ideas to keep the scope coherent. Correctness was checked with a production build and manual flows: create, rename, edit, refresh, import, search, and share.
