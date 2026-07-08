<div align="center">

# 🎭 CharacterVerse

**A full-stack archive for your favorite fictional characters.**

List them. Filter them. Favorite them. Add your own.

![JavaScript](https://img.shields.io/badge/JavaScript-73.8%25-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-24.5%25-1572B6?logo=css3&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Backend-Express-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/Database-SQLite-003B57?logo=sqlite&logoColor=white)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Data Model](#-data-model)
- [Roadmap](#-roadmap)


## 🧭 About

**CharacterVerse** is a full-stack web application for cataloguing fictional characters from any universe — TV shows, movies, books, games, anime, you name it. Search across your collection, filter by universe, role, status, or rating, mark favorites, and manage entries through a clean, modern interface backed by a REST API.

Built as a hands-on project combining a React frontend with an Express + Prisma + SQLite backend.

## ✨ Features

| | |
|---|---|
| 🗂️ **Browse & detail views** | List all characters and drill into a dedicated detail page for each one |
| 🔍 **Powerful filtering** | Search by name and filter by universe, role, status, and minimum rating |
| ⭐ **Favorites** | Mark and unmark characters as favorites with a single click |
| ✏️ **Full CRUD** | Create, update, and delete character entries |
| 🖼️ **Image uploads** | Attach a picture to each character via built-in upload support |
| ⚡ **Modern stack** | React + Vite frontend, Express + Prisma API, instant feedback via toast notifications |

## 🛠 Tech Stack

**Frontend**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)

**Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Multer](https://github.com/expressjs/multer) (file uploads)

## 📁 Project Structure

```
CharacterVerse/
├─ backend/
│  ├─ prisma/          # Prisma schema & migrations
│  └─ src/              # Express app, routes, controllers
├─ frontend/
│  ├─ public/           # Static assets
│  └─ src/              # React components, pages, services
├─ .env.example         # Sample environment variables
└─ README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Ardaozk54/CharacterVerse.git
cd CharacterVerse
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`, using `.env.example` in the project root as a reference:

```env
DATABASE_URL="file:./dev.db"
```

Then set up the database:

```bash
npx prisma migrate dev
npx prisma db seed
```

Run the API:

```bash
npm run dev
```

The API is now available at **`http://localhost:3000`**.

### 3. Set up the frontend

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app is now available at **`http://localhost:5173`**.

> ⚠️ **Note:** the frontend currently points to a hardcoded API base URL (`http://localhost:3000/api/characters`). If you deploy the backend elsewhere, update the service file accordingly.

## 🔌 API Reference

Base URL: `http://localhost:3000/api/characters`

| Method | Endpoint | Description |
|--------|----------|--------------|
| `GET` | `/api/characters` | List all characters |
| `GET` | `/api/characters/:id` | Get a single character's details |
| `POST` | `/api/characters` | Create a new character |
| `PATCH` | `/api/characters/:id` | Update an existing character |
| `DELETE` | `/api/characters/:id` | Delete a character |
| `PATCH` | `/api/characters/:id/favorite` | Toggle favorite status |
| `POST` | `/api/characters/upload` | Upload a character image |

### Query filters

Available on `GET /api/characters`:

| Param | Description |
|-------|--------------|
| `search` | Free-text search by name |
| `universe` | Filter by universe/franchise |
| `role` | Filter by character role |
| `status` | Filter by status (e.g. alive/deceased) |
| `favorite` | `true` to show favorites only |
| `minRating` | Minimum rating threshold |

**Example:**

```http
GET /api/characters?search=walter&status=ALIVE&minRating=8
```

## 🧬 Data Model

Each character record includes:

| Field | Description |
|-------|--------------|
| `name` | Character's name |
| `universe` | The show, movie, book, or game the character is from |
| `role` | e.g. protagonist, antagonist, side character |
| `skill` | Notable skill or ability |
| `rating` | Numeric rating |
| `status` | Current status |
| `imageUrl` | URL/path to the character's image |
| `description` | Free-text description |
| `isFavorite` | Boolean favorite flag |

