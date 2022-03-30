import { useRouter } from 'next/router'
import React from 'react'
import styles from './title.module.css'


export default function Title({ title, heading, textColor = "", bannerColor, className, style = {fontSize:'1.7rem'}}) {
  const router = useRouter()
  return (
    <div className={`mb-4 ${className}`}>
        <h5 style={{color:textColor,...style}} className={`${heading} ${styles.title} mt-0`}>{title}</h5>
        <div style={bannerColor && {backgroundColor:bannerColor}} className={`${styles.banner}`}></div>
    </div>
  )
}
