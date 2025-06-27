import React from 'react'
import {useTheme} from '../context/ThemeContext'
export default function Navbar(){
const {theme,toggleTheme}=useTheme()
return(
<nav className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-900">
<div className="text-lg font-bold">React App</div>
<button onClick={toggleTheme} className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">{theme==='dark'?'Light':'Dark'} Mode</button>
</nav>
)
} 