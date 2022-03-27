import React from 'react'
import styles from './app-layout.module.css'
import { Navbar,Footer } from '..'
export default function AppLayout({children}) {
  return (
      <div className={`${styles.container}`} >
        <Navbar />
          <div className={`${styles.child_container}`}>
              {children}
          </div>
        <Footer/>
    </div>
  )
}
