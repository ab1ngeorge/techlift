import './globals.css'
import React from "react"
export default function Layout({ children}) {
  return (
    <div className='flex w-screen'>
      <main className='flex-grow w-screen'>
        {children}
      </main>
    </div>
  )
}
