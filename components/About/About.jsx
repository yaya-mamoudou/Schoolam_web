import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
import { Title } from '..'

export default function About() {
  return (
    <div className='container mt-5 mb-3'>
        <div className="row py-5">
            <div className={`${styles.image_box} col-12 col-sm-6 d-none d-sm-block`}>
                <Image height={200} width={250} src={'/images/lines.png'}/>
            </div>
            <div className={`${styles.content_box} col-12 col-sm-6 px-4`}>
                <div className='d-flex flex-column'>
                <Title heading={'mt-0'} className="align-self-center align-self-md-start mt-0" bannerColor={"var(--orange)"} title={'About Sooschool'}/>
                  <p>Soochool is a platform built to assist students in their search for Universities through an accurate filtering and location on a map.</p>
                  <p>It provides a large amount of degree programs offered and requirements. It also includes</p>
                </div>
            </div>
        </div>
    </div>
  )
}
