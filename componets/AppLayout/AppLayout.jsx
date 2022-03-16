import React from 'react'
import styles from './app-layout.module.css'
import { Navbar,Footer } from '..'
export default function AppLayout({children}) {
  return (
      <div className='vh-100 d-flex flex-column '>
        <Navbar />
        <div className={`${styles.child_container} h-100`}>{children}</div>
        <Footer/>
    </div>
  )
}
