import { useRouter } from 'next/router'
import React from 'react'
import styles from './title.module.css'


export default function Title({ title, heading, textColor, bannerColor }) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className={`mt-5 mb-4`}>
        <span style={textColor && {color:textColor}} className={`${heading} ${styles.title} h5`}>{title}</span>
        <div style={bannerColor && {backgroundColor:bannerColor}} className={`${styles.banner}`}></div>
    </div>
  )
}
