import React,{createContext,useContext,useState,useEffect} from 'react'
const ThemeContext=createContext()
export function ThemeProvider({children}){
const [theme,setTheme]=useState('light')
useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark')},[theme])
const toggleTheme=()=>setTheme(t=>t==='dark'?'light':'dark')
return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
}
export function useTheme(){return useContext(ThemeContext)} 