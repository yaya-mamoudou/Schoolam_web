import React from 'react'
import { Button } from '..'
import styles from './hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={`${styles.container}`}>
      <div className="container h-100 d-flex flex-column flex-lg-row position-relative">
        <div style={{zIndex:2}} className="align-self-center ">
          <h1 className={`${styles.header}`}>Search your <span style={{color:'var(--purple)'}}>dream University</span></h1>
          <div className={`${styles.text} mt-2`}>Discover universities that you never knew about.</div>
          <div className={`${styles.text} mb-5`}>Search schools like never before.</div>
          <div className={`d-flex ${styles.btn_section}`}>
            <Button url={'/universities'} className={`px-5 py-2 ${styles.btn} me-5`} text={'Get started'} />
            <Image height={70} width={89} src={'/images/Arrow.png'}/>
          </div>
        </div>
        <div style={{ bottom: 0, right: 0, height: 300, width: 400 }} className={`${styles.img_box}`}>
          <Image layout="fill" className={`${styles.img}`} height={400} width={400} src={'/images/boy_with_pencil.png'} />
          <div className={`${styles.img_box2}`}>
          <Image objectFit="contain" className={`${styles.img2}`} height={80} width={70} src={'/images/purple_circles.png'} />

          </div>
        </div>
      </div>
    </div>
  )
}
