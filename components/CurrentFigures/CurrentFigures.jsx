import Image from 'next/image'
import React from 'react'
import Title from '../Title/Title'
import styles from './currentFigures.module.css'

export default function CurrentFigures() {
  return (
      <div className="my-5 py-5">
          <div className="container"><Title bannerColor={"var(--orange)"} title={"Current figures"}/></div>
        <div className={`bg-light ${styles.container}`}>
          <div style={{ backgroundColor:'rgba(13,116,105,0.75)',width:'100%',height:'100%',padding:'10rem 0'}} className="d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-between">
                    {items.map((item, index) => (
                        <div key={index} className=" col-12 col-md-3 text-white text-center">
                                <div style={{fontFamily:'var(--title-family)',fontSize:'5rem',fontWeight:'bold'}}>{item.value}</div>
                                <div style={{fontSize:'1.7rem',fontFamily:'var(--title-family)'}}>{item.text}</div>
                        </div>
                    ))}
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

const items = [
    { value: 10, text: 'Universities across the nation' },
    { value: 30, text: 'degree specializations' },
    { value: 5, text: 'Towns across the nation' },

]