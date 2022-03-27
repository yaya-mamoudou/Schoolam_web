import React from 'react'
import styles from './loader.module.css'

export default function Loader() {
  return (
      <div class={`${styles.lds_dual_ring}`}></div>
  )
}
