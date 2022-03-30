import Image from 'next/image'
import React from 'react'
import Title from '../Title/Title'

export default function ToExpect() {
  return (
      <div className='container my-5'>
          <div className="d-flex flex-column mb-2">
          <Title className={"align-self-center align-self-md-start fw-bold"} bannerColor={"var(--orange)"} title={'What to expect'}/>
          </div>
          <div className="row justify-content-between gy-4 gx-sm-0">
              {items.map((item, index) => {
                  return (
                      <div key={index} className="col-12 col-md-3  py-3 py-md-2 px-4 px-md-2 d-flex flex-column text-center">
                          <div style={{width:'fit-content'}} className=" align-self-center">
                              <Image src={item.img} width={40} height={40}/>
                          </div>
                          <div>{item.text}</div>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

const items = [
    { img: '/images/graduation_hat.png', text: 'Discover all universities and,get to know all the field and their requirements. ' },
    { img: '/images/location_home.png', text: 'On a map, get the opportunity to view the location of all universities.' },
    {img:'/images/filter_home.png',text:'Filtering of Universities by degree, programme, location can easily be done.'},
]