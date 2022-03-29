import React from 'react'
import { Button } from '..'
import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={`${styles.container}`}>
      <div className="container h-100 d-flex position-relative">
        <div className="align-self-center">
          <h1 className={`${styles.header}`}>Search your <span style={{color:'var(--purple)'}}>dream University</span></h1>
          <div className={`${styles.text} mt-2`}>Discover universities that you never knew about.</div>
          <div className={`${styles.text} mb-5`}>Search schools like never before.</div>
          <div className="d-flex">
            <Button className={`px-5 py-2 ${styles.btn} me-5`} text={'Get started'} />
            <Image height={70} width={89} src={'/images/Arrow.png'}/>
          </div>
        </div>
        <div style={{ bottom: 0, right: 0,position:'absolute',height:350,width:500 }}>
          <Image layout="fill" className={`${styles.img}`} height={500}  width={400} src={'/images/boy_with_pencil.png'}/>
        </div>
      </div>
    </div>
  )
}
