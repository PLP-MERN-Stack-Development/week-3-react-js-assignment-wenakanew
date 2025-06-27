
# React.js and Tailwind CSS Assignment

This project is a responsive React application built with Vite and Tailwind CSS. It demonstrates component architecture, state management, hooks, API integration, and theme switching.

## Features
- Task Manager: Add, complete, delete, and filter tasks (All, Active, Completed) with localStorage persistence
- API Integration: Fetches and displays posts from JSONPlaceholder with search, pagination, loading, and error states
- Theme Switcher: Toggle between light and dark mode
- Responsive Design: Works on mobile, tablet, and desktop
- Clean, reusable components (Button, Card, Navbar, Footer, Layout)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the app in your browser at the local URL shown in the terminal (usually http://localhost:5173)

## Project Structure
```
src/
├── components/       # Reusable UI components
├── pages/            # Page components (Home, PostsList)
├── hooks/            # Custom React hooks
├── context/          # React context providers
├── api/              # API integration functions
├── utils/            # Utility functions
└── App.jsx           # Main application component
```

## Deployment
- Deploy to Vercel.

**Deployed URL:** 

## Screenshots

![App Screenshot](./screenshots/Screenshot%202025-06-27%20111943.png)

## Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 
