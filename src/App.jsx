import React from 'react'
import {ThemeProvider} from './context/ThemeContext'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
} 