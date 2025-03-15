# Style Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Code Formatting](#code-formatting)
3. [Naming Conventions](#naming-conventions)
4. [File and Folder Structure](#file-and-folder-structure)
5. [Component Structure](#component-structure)
6. [Font Family](#font-family)
7. [Screen size and Colors](#screen-size-and-colors)
8. [State Management](#state-management)
9. [Performance Optimization](#performance-optimization)
10. [Tailwind and CSS Styling](#tailwind-and-css-styling)
11. [Commit Message Guidelines](#commit-message-guidelines)

---

## Introduction
This style guide defines the coding conventions and practices to maintain consistency, readability, and maintainability across this project.

## 📄 Code Formatting
- Use **2 spaces** for indentation (or project-specific Prettier config).
- Use **single quotes (`'`)** for strings, except where escaping is needed.
- Always end statements with **semicolons (`;`)**.
- Use **trailing commas** for multiline objects and arrays.
- Use **ES6+ features** (e.g., arrow functions, const & let, template literals).
- Ensure **consistent line breaks** and avoid trailing whitespace.

## 📝 Naming Conventions
- **Variables & Functions:** Use `PascalCase` (e.g., `HomeData`)
- **Renaming Images and Icons:** Use `lower_case` (e.g., `image_home`)
- **React Components:** Use `PascalCase` (e.g., `UserCard`)
- **Files & Folders:** Use `PascalCase` (e.g., `HeroSection.jsx`)

## 📂 File and Folder Structure
```
/public             # Icons, logos and gifs
/src
  ├── components/   # Reusable UI components
  ├── views/        # Pages for UI
  ├── utils/        # Helper functions and utilities
  ├── assets/       # Images, video and static files
  ├── index.css     # Global Tailwind styles and custom utilities
```

## 📦 Component Structure
```jsx
const ExampleComponent = () => {
  
  return (
    <div>
      Your Code goes here
    </div>
  );
}
export default ExampleComponent;
```
## Font Family
[See Tailwind Config](tailwind.config.js)

## Screen size and Colors
[See Tailwind Config](tailwind.config.js)
             

## 🔃 State Management
- **Use React hooks** (useState, useEffect, useContext) for state management.

## 🎭Performance Optimization
- Use lazy loading (React.lazy) for components.
- Optimize images using WebP format ``(.webp)``.

## 🔵Tailwind and CSS Styling
- **Tailwind CSS** for styling.
- Keep styles modular and reusable.
- Avoid inline styles where possible.
- Utilize Tailwind's **utility-first** approach for styling.
- Extract reusable styles into **Tailwind components** or `@apply` in a global CSS file.

## 🛠️ Commit Message Guidelines
- Use descriptive messages following this format:
  ```
  feat: Add new authentication flow
  set-up: Created button component
  fix: Resolve checkout button bug
  refactor: Improve font and animation style
  docs: Update README with installation steps
  ```



