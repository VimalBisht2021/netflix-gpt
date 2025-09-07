# Netflix-GPT

A React-based demo that combines a Netflix-style UI with GPT-powered search and movie suggestions, plus Firebase for user authentication and persistence. This project demonstrates how to integrate OpenAI and Firebase into a movie-browsing app with features like GPT-driven recommendations, search, trailers, and curated lists (popular, trending, upcoming).
---
A React-based application that combines a Netflix-style UI with GPT-powered search and movie suggestions, using Firebase for user authentication. This project demonstrates how to integrate OpenAI and Firebase into a modern movie-browsing app with features like GPT-driven recommendations, search, trailers, and curated movie lists.

## Table of contents

- [Introduction](#introduction)
- [Key features](#key-features)
- [Live demo / build](#live-demo--build)
- [Live demo](#live-demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Dependencies](#dependencies)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Introduction

Netflix-GPT is a single-page React application that mimics a streaming UI and augments the experience with GPT-powered features. It demonstrates how to combine modern frontend tooling (React, Tailwind CSS) with backend services (Firebase) and LLM integration (OpenAI) to provide contextual movie suggestions, search enhancements, and interactive UX.
Netflix-GPT is a single-page React application that mimics a streaming service's UI and enhances it with AI-powered features. It demonstrates how to combine modern frontend tooling (React, Redux, Tailwind CSS) with backend services (Firebase) and LLM integration (OpenAI) to provide contextual movie suggestions, an enhanced search experience, and an interactive UI.

This README will guide you through setting up the project locally, configuring API keys, running the app in development, and understanding the codebase.

## Key features

- Netflix-like responsive UI and movie browsing
- GPT-powered search and movie suggestions
- Firebase authentication and (optional) persistence
- Dedicated hooks for fetching popular/trending/upcoming movies and trailers
- Tailwind CSS for styling and layout
- Build-ready with `react-scripts` for production deployment
- State management with Redux Toolkit

## Live demo / build
## Live demo

This repo includes a `build/` output folder. If you'd like to deploy the app (for example to Firebase Hosting), build the project and follow your hosting provider's deployment instructions.
A live demo can be deployed to services like Vercel, Netlify, or Firebase Hosting. To deploy, first build the project:

```sh
npm run build
```

Then, follow your hosting provider's instructions to deploy the `build/` directory.

## Requirements

- Node.js v16+ (Node 18+ recommended)
- npm (or yarn/pnpm) installed
- An OpenAI API key for GPT features
- A Firebase project (optional but required for auth/persistence)
- A TMDB (The Movie Database) API key for movie data (this seems to be used by the hooks)

## Installation


1. Clone the repository

```powershell
git clone https://github.com/VimalBisht2021/netflix-gpt.git
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
```

1. Install dependencies

```powershell
npm install
```

1. Create a configuration file (see next section)

1. Start the development server

```powershell
npm start
```

The app will open at http://localhost:3000 by default.

## Configuration

Create a `.env` file in the project root (this file should not be committed). At minimum configure the following environment variables:

```env
# .env (example)
REACT_APP_OPENAI_API_KEY=sk-xxxxx
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
REACT_APP_FIREBASE_APP_ID=1:xxxxxxxx:web:xxxxxxxx
```

Notes:

- The app reads OpenAI and Firebase config values from `process.env.REACT_APP_*` variables. The exact environment variable names may be used inside `src/utils/firebase.js` and `src/utils/openai.js`.
# Netflix-GPT

A React-based demo that combines a Netflix-style UI with GPT-powered search and movie suggestions, plus Firebase for user authentication and persistence. This project showcases how to integrate OpenAI and Firebase into a movie-browsing app with features like GPT-driven recommendations, search, trailers, and curated lists (popular, trending, upcoming).

---

## Table of contents

- [Introduction](#introduction)
- [Key features](#key-features)
- [Live demo / build](#live-demo--build)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Dependencies](#dependencies)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Introduction

Netflix-GPT is a single-page React application that mimics a streaming UI and augments the experience with GPT-powered features. It demonstrates how to combine modern frontend tooling (React, Tailwind CSS) with backend services (Firebase) and LLM integration (OpenAI) to provide contextual movie suggestions, search enhancements, and interactive UX.

This README will guide you through setting up the project locally, configuring API keys, running the app in development, and understanding the codebase.

## Key features

- Netflix-like responsive UI and movie browsing
- GPT-powered search and movie suggestions
- Firebase authentication and (optional) persistence
- Dedicated hooks for fetching popular/trending/upcoming movies and trailers
- Tailwind CSS for styling and layout
- Build-ready with `react-scripts` for production deployment

## Live demo / build

This repo includes a `build/` output folder. If you'd like to deploy the app (for example to Firebase Hosting), build the project and follow your hosting provider's deployment instructions.

## Requirements

- Node.js v16+ (Node 18+ recommended)
- npm (or yarn/pnpm) installed
- An OpenAI API key for GPT features
- A Firebase project (optional but required for auth/persistence)

## Installation

1. Clone the repository

```powershell
git clone https://github.com/VimalBisht2021/netflix-gpt.git
cd netflix-gpt
```

2. Install dependencies

```powershell
npm install
```

3. Create a configuration file (see next section)

4. Start the development server

```powershell
npm start
```

The app will open at <http://localhost:3000> by default.

## Configuration

Create a `.env` file in the project root (this file should not be committed). At minimum configure the following environment variables:

```env
# .env (example)
REACT_APP_OPENAI_API_KEY=sk-xxxxx
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
REACT_APP_FIREBASE_APP_ID=1:xxxxxxxx:web:xxxxxxxx
```

Notes:

- The app reads OpenAI and Firebase config values from `process.env.REACT_APP_*` variables. The exact environment variable names may be used inside `src/utils/firebase.js` and `src/utils/openai.js`.
# Netflix-GPT

A React-based demo that combines a Netflix-style UI with GPT-powered search and movie suggestions, plus Firebase for user authentication and persistence. This project showcases how to integrate OpenAI and Firebase into a movie-browsing app with features like GPT-driven recommendations, search, trailers, and curated lists (popular, trending, upcoming).

---

## Table of contents

- [Introduction](#introduction)
- [Key features](#key-features)
- [Live demo / build](#live-demo--build)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Dependencies](#dependencies)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Introduction

Netflix-GPT is a single-page React application that mimics a streaming UI and augments the experience with GPT-powered features. It demonstrates how to combine modern frontend tooling (React, Tailwind CSS) with backend services (Firebase) and LLM integration (OpenAI) to provide contextual movie suggestions, search enhancements, and interactive UX.

This README will guide you through setting up the project locally, configuring API keys, running the app in development, and understanding the codebase.

## Key features

- Netflix-like responsive UI and movie browsing
- GPT-powered search and movie suggestions
- Firebase authentication and (optional) persistence
- Dedicated hooks for fetching popular/trending/upcoming movies and trailers
- Tailwind CSS for styling and layout
- Build-ready with `react-scripts` for production deployment

## Live demo / build

This repo includes a `build/` output folder. If you'd like to deploy the app (for example to Firebase Hosting), build the project and follow your hosting provider's deployment instructions.

## Requirements

- Node.js v16+ (Node 18+ recommended)
- npm (or yarn/pnpm) installed
- An OpenAI API key for GPT features
- A Firebase project (optional but required for auth/persistence)

## Installation

1. Clone the repository

```powershell
git clone https://github.com/VimalBisht2021/netflix-gpt.git
cd netflix-gpt
```

2. Install dependencies

```powershell
npm install
```

3. Create a configuration file (see next section)

4. Start the development server

```powershell
npm start
```

The app will open at <http://localhost:3000> by default.

## Configuration

## Configuration

Create a `.env` file in the project root (this file should not be committed). At minimum configure the following environment variables:

```env
# .env (example)
REACT_APP_OPENAI_API_KEY=sk-xxxxx
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
REACT_APP_FIREBASE_APP_ID=1:xxxxxxxx:web:xxxxxxxx
```

Notes:

- The app reads OpenAI and Firebase config values from `process.env.REACT_APP_*` variables. The exact environment variable names may be used inside `src/utils/firebase.js` and `src/utils/openai.js`.
- Keep your API keys secret. Do not commit `.env` to source control.

## Usage

- Open the app in the browser and browse the curated lists (Popular, Trending, Upcoming).
- Use the GPT-powered search bar to ask natural-language queries like "Suggest family-friendly sci-fi movies" or "What to watch tonight if I liked Inception?".
- Sign in using Firebase-auth (if configured) to save preferences.
- Click a movie card to view trailer or details (powered by the internal `useGetTrailer` hook).

Examples of GPT prompts the app supports:

- "Show me thriller movies from the 2010s similar to Gone Girl"
- "Recommend three movies for a cozy Friday night"

## Project structure

Top-level structure (key files/folders):

- `public/` — static public assets and `index.html`
- `build/` — production build output (generated)
- `src/` — application source code
	- `App.js` — app root and routing
	- `index.js`, `index.css` — app bootstrap and global styles
	- `components/` — React components used in the UI (examples below)
		- `Header.js`, `Browse.js`, `Moviecard.js`, `Movielist.js`, `Maincontainer.js`, `Secondarycontainer.js`, `Login.js`, `Error.js`, `VideoBack.js`, `Videotitle.js`, `GPTSearch.js`, `GPTMoviesuggestion.js`, `GPTSearchbar.js`
	- `hooks/` — custom data-fetching hooks
		- `useGetTrailer.js`, `useNowPlayingMovies.js`, `usePopular.js`, `useTrending.js`, `useUpcoming.js`
	- `utils/` — utilities and slices for state management
		- `openai.js` — OpenAI client helper
		- `firebase.js` — Firebase initialization
		- `movieslice.js`, `userslice.js`, `GPTslice.js`, `configslice.js` — Redux slices
		- `const.js`, `Validate.js`, `languageconst.js`, `appstore.js`

This structure is intentionally simple and modular: small components + hooks + utils.

## Dependencies

Key dependencies (from `package.json`):

- react, react-dom — UI library
- react-scripts — Create React App scripts
- tailwindcss, tailwind-scrollbar-hide — styling
- firebase — authentication and backend services
- openai — official OpenAI SDK used to call GPT
- react-redux, @reduxjs/toolkit — state management
- react-router-dom — routing
- @testing-library/*, jest-dom — testing utilities

Exact versions are declared in `package.json`.

## Development notes


- Styling uses Tailwind; check `tailwind.config.js` for customization.
- Redux slices are in `src/utils/` and wired in `appstore.js`.
- LLM calls are isolated in `src/utils/openai.js`. To switch models or modify prompts, update that file or the slice that dispatches GPT actions.
- Hooks in `src/hooks/` encapsulate external API calls (TMDB or other movie data sources) — update them if you want to change data providers.

Quick checks before committing changes:

1. Run tests

```powershell
npm test -- --watchAll=false
```

2. Build for production

```powershell
npm run build
```

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository and create a feature branch: `feature/your-feature`.
2. Write clear, focused commits. Prefer small commits and descriptive messages.
3. Add or update tests for new behavior.
4. Open a pull request against `main` describing the change, testing steps, and any configuration required.

Please include the following in PRs:

- A short description of the change
- How to reproduce / test the change
- Any new environment variables or setup steps

Code style

- Follow existing code style (ESLint + Prettier conventions). If you introduce new dependencies, document them in `package.json` and the README.

## License

This project does not include a license file by default. If you want to make it open-source, add a `LICENSE` file (MIT is a common choice). Example license header:

```text
MIT License

Copyright (c) 2025 <Your Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
```

If you want, I can add a `LICENSE` file with the MIT text.

## Acknowledgements

- Built with Create React App
- OpenAI for GPT capabilities
- Firebase for authentication/hosting
- Tailwind CSS for UI

---


If you'd like, I can also:

- Add a `.env.example` file to the repo with the variable names shown above.
- Create a `LICENSE` file (MIT) and add a license badge to `README.md`.
- Add a short contributing template or GitHub issue/PR templates.

Requirements coverage:

- Introduction: Done
- Key features: Done
- Installation steps: Done
- Usage instructions: Done
- Project structure: Done
- Dependencies: Done
- Configuration details: Done
- Contribution guidelines: Done
- License information: Done (notes + suggestion)

