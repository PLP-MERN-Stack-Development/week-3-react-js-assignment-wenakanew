import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout({children}){
return(
<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
<Navbar/>
<main className="flex-1 container mx-auto px-2">{children}</main>
<Footer/>
</div>
)
} 