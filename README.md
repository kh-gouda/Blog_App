# 📝 Blog App

A modern, component-driven blog application built with **React +
TypeScript**, following the **Atomic Design methodology**, featuring
dynamic routing, client-side search, and unit testing with Vitest.

---

## 🚀 Overview

**Blog App** is a responsive single-page application that displays a
collection of blog posts loaded from a local `posts.json` file. Users
can:

- Browse posts on the home page
- Click any post to view its full details on a dedicated route
- Search posts by **title, author, or category**
- Load more / load less posts dynamically
- Navigate seamlessly using React Router

The project emphasizes clean architecture, maintainability, and
testability.

---

## 🏗️ Architecture: Atomic Design

The UI is structured using **Atomic Design** principles:

### 🟢 Atoms

Basic UI building blocks such as: - `Button` - `SearchForm` - `Typography` - `...so on`

### 🟡 Molecules

Reusable UI compositions like: - `Header` - `PostCard` - `PostTitle` - `SearchForm`

### 🔵 Organisms

Complex components composed of molecules and atoms: - `PostCard` - `PostList` - `Header` - `Footer`

### 🟣 Templates & Pages

Page-level layouts including: - `HomePage` - `PostDetailsPage`

---

## 🧠 State Management

State is managed using **React Context API** (`PostsContext`) which
provides:

- `posts` -- all fetched posts\
- `postsInDisplay` -- currently visible posts\
- `loading` and `error` states\
- `isSearchResult` -- whether user is viewing search results\
- `handleSearch(searchTerm)` -- filters posts by:
  - title
  - category
  - author name
- `and setter function`

### Example search logic

```ts
const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchTerm.toLowerCase()),
);
```

---

## 🌐 Routing (React Router)

Routes include:

Route Description

---

`/` Home page with post list
`/post/:id` Dynamic route for single post details
`/*` 404 page not found if not matched route

Each `PostCard` links to its own detail page using:

```tsx
<Link to={`/post/${post.id}`}>...</Link>
```

---

## 📄 Data Source (`posts.json`)

Posts are loaded from a local JSON file on app mount:

```ts
const response = await fetch("/posts.json");
const data: Post[] = await response.json();
```

Each post follows this schema (simplified):

```json
{
  "id": 1,
  "image": "/images/card/post-1.webp",
  "title": "The Impact of Technology on the Workplace",
  "category": "Technology",
  "author": {
    "name": "Tracey Wilson",
    "image": "/images/authors/Tracey_Wilson.png"
  },
  "datePublished": "August 20, 2022",
  "details": {
    "image": "/images/single/post-1-d.webp",
    "articles": [
      {
        "title": "Research Your Destination",
        "paragraphs": ["..."]
      }
    ]
  }
}
```

---

## 🔍 Search Feature

Users can search posts from the header search bar. Results match
against:

- Post title\
- Category\
- Author name

If the input is empty, no search is triggered.
If the search term not found show message

---

## 🧪 Testing

The project includes **unit tests** using:

- **Vitest**
- **React Testing Library**
- **jsdom**
- **jest-dom**

Components tested include:

- `all components`
- Context logic in `PostsContextProvider` tested through components tests

Tests cover: - User interactions (clicks, typing, submit) - Correct
state updates - Conditional rendering - Navigation behavior - Search
logic

---

## 🛠️ Tech Stack

- React\
- TypeScript\
- Vite\
- React Router\
- Context API\
- Vitest + RTL + jsdom + jest-dom\
- CSS (Tailwind-style utility classes)
- prettier and prettier-plugin-tailwindcss (for code quality and consistency between teams)

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

To run tests:

```bash
npm test
```

---

## 👨‍💻 Author

**Khaled Gouda**\
Frontend Developer

- GitHub: https://github.com/kh-gouda\
- LinkedIn: https://linkedin.com/in/kh-gouda\
- Email: techgoast@gmail.com

---

⭐ Feel free to fork, star, or contribute!
