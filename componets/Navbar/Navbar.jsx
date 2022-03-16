import React from 'react'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import styles from './navbar.module.css'
export default function Navbar() {
  return (
      <div className={`${styles.navbar} container-fluid`}>
          <div className="container d-flex py-3">
              <div className="logo-container d-flex align-items-center ">
                  <Image width={30} height={30} src={logo} alt="logo" />
                  <span className='ms-2'>Schoolam</span>
              </div>
              <div className={`d-flex ms-auto align-items-center ${styles.nav_links}`}>
                  <span>Home</span>
                  <span>About</span>
                  <span>Contact</span>
                  <span>Works</span>
                  <span>FAQ</span>
              </div>
          </div>
    </div>
  )
}

