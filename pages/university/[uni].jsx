import { useState } from 'react'
import { AppLayout, Button, Title } from '../../componets'
import styles from './university.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function University() {
  const router = useRouter()
  const { uni, data } = router.query
  const [uniData, setUniData] = useState(data ? JSON.parse(decodeURIComponent(router.query.data)) : {})
  const [activeTab, setActiveTab] = useState(0)
  const [sectionOpen, setSectionOpen] = useState(0)
  const [programs, setPrograms] = useState([
    {
      bachelor:
      {
        agriculture:
          { name: 'Agriculture', title: `Bachelor's in Agriculture`,amount:50000,language:'English',duration:'3 years' }
      }
    }
  ])
  
  return (
      <AppLayout>
      <div className={`container-fluid p-0 ${styles.banner} `}>
        <div className={`${styles.overlay_banner}`}>
          <div className="container d-flex">
            <Title textColor={'white'} bannerColor={'white'} title={uni}/>
         </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row g-2">
          <div className=" col-xs-12  col-lg-4 col-xl-3">
            <div className=" border rounded p-3 d-flex flex-column align-items-center ">
              <Image width={80} height={80} src={uniData.img} objectFit="contain" className="" />
              <h5 className='fw-bold my-2'>{uniData.name}</h5>
              <hr className={`my-4 ${styles.line}`} />
              <div>
                <div className='d-flex mb-2'>
                  <i class="fas fa-map-marker-alt me-2"></i> <span>{uniData.location}</span>
                </div>
                <div className='d-flex mb-2'>
                <i class="fas fa-phone-alt me-2"></i> {uniData.phone}
                </div>
                <div className='d-flex mb-2'>
                <i class="fas fa-envelope me-2"></i> {uniData.email}
                </div>
             </div>
              <Button external={true} url={uniData.website} text={'Website'} className="px-5 my-3"/>
            </div>
          </div>
          
          <div className="col-xs-12 col-lg-8 col-xl-9">
          <div className="border rounded p-3">
              <h5 className='fw-bold'>University Programs</h5>
              <div className={`d-flex my-4 ${styles.tabs_container}`}>
                <div onClick={()=>setActiveTab(0)} className={`${styles.tab} ${activeTab == 0 && styles.active_tab}`}>Bachelor <div className={`${styles.program_number}`}>5</div></div>
                <div onClick={()=>setActiveTab(1)} className={`${styles.tab} ${activeTab == 1 && styles.active_tab}`}>Master <div className={`${styles.program_number}`}>3</div></div>
              </div>

              <div>
                <div className="">
                  <div className={`${styles.single_program} ${sectionOpen == 0 && 'border-0 '} d-flex align-items-center`}>
                    <i class="fas fa-caret-down"></i>
                    <div className={`ms-2 ${styles.program_title}`}>Agriculture</div>
                    {sectionOpen !== 0 && <div className={`${styles.price}`}>~50000 FCFA / year</div>}
                  </div>
                  <div className={`${styles.program_detail_section} mb-4 p-3 border rounded`}>
                    <h6 className='fw-bold'>Bachelor's in Agriculture</h6>
                    <div className='my-3 d-flex'>
                      <span class={` ${styles.icon}`}>
                      <i class={`fas fa-clock text-secondary`}></i>
                      </span>
                      <span className='me-2'>Duration:</span>
                      <span>3 years</span>
                    </div>

                    <div className='my-3 d-flex'>
                      <span class={` ${styles.icon}`}>
                      <i class={`fas fa-money-bill-alt text-secondary`}></i>
                      </span>
                      <span className='me-2'>Fee:</span>
                      <span>50000 FCFA / year</span>
                    </div>

                    <div className='my-3 d-flex'>
                      <span class={` ${styles.icon}`}>
                      <i className={`fas fa-globe-europe text-secondary`}></i>
                      </span>
                      <span className='me-2'>Language:</span>
                      <span>English</span>
                    </div>

                    <Button url={""} text={'Requirements'} className="px-4 my-3 btn-secondary"/>



                  </div>
                </div>

                <div className={`${styles.single_program} d-flex align-items-center`}>
                  <i class="fas fa-caret-right"></i>
                  <div className={`ms-2 ${styles.program_title}`}>Software Engineering</div>
                  <div className={`${styles.price}`}>~50000 FCFA / year</div>
                </div>
              </div>

          </div>
          </div>
        </div>
      </div>
      </AppLayout>
  )
}
