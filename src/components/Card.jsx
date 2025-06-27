import React from 'react'
export default function Card({children,className=''}){
return <div className={`bg-white dark:bg-gray-800 rounded shadow p-4 ${className}`}>{children}</div>
} 