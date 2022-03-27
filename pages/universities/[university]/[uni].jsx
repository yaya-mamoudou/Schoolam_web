import { useState,useEffect } from 'react'
import { AppLayout, Button, Title } from '../../../components/index'
import styles from './university.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {Box,Tab} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import Collapsible from 'react-collapsible';
import { useDispatch, useSelector } from 'react-redux'
import { load_programs } from '../../../redux/actions'

let img = 'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png'

export default function University() {
  const router = useRouter()
  const dispatch = useDispatch()

  const programs = useSelector(({ programs }) => programs.programs)

  const [uniData, setUniData] = useState({})
  const [uni_name, setUni_name] = useState('')
  const [id, setId] = useState()
  const [activeTab, setActiveTab] = useState('1')
  const [isExpanded, setIsExpanded] = useState(-1)
  const [sectionOpen, setSectionOpen] = useState(0)


  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { university, uni, data } = router.query
      setId(uni)
      setUni_name(university)
      setUniData(JSON.parse(decodeURIComponent(data)))      
   }
  }, [router])

  useEffect(() => {
    id && dispatch(load_programs(id))
  }, [id])
  
  const handleTabChange = (e,value) => {
    setActiveTab(value);
    setIsExpanded(-1)
  }

  const ProgramTitle = ({isOpen,title,price}) => (
    <div 
      className={`${styles.single_program} ${isOpen && 'border-0 '} d-flex align-items-center`}>
      <i className="fas fa-caret-down"></i>
      <div className={`ms-2 ${styles.program_title}`}>{title}</div>
      {!isOpen && <div className={`${styles.price}`}>~{price} FCFA / year</div>}
    </div>
  )

  const ProgramBody = ({program}) => (
    <div className={`${styles.program_detail_section} mb-4 p-3 border rounded`}>
      <div className="row">
        <div className="col-12 col-md-6">
          <h6 className='fw-bold'>{program.deg_type} in {program.spe_name}</h6>
          <div className='my-3 d-flex'>
            <span className={` ${styles.icon}`}>
            <i className={`fas fa-clock text-secondary`}></i>
            </span>
            <span className='me-2'>Duration:</span>
            <span>{program.duration}</span>
          </div>

          <div className='my-3 d-flex'>
            <span className={` ${styles.icon}`}>
            <i className={`fas fa-money-bill-alt text-secondary`}></i>
            </span>
            <span className='me-2'>Fee:</span>
            <span>{program.fee} FCFA / year</span>
          </div>

          <div className='my-3 d-flex'>
            <span className={` ${styles.icon}`}>
            <i className={`fas fa-globe-europe text-secondary`}></i>
            </span>
            <span className='me-2'>Language:</span>
            <span>English</span>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <h6 className='fw-bold'>Requirements</h6>
          {program.requirements.map((req, index) => <div key={index}>- {req}</div>)}
          {/* <Button url={""} text={'Requirements'} className="px-4 my-3 btn-secondary"/> */}
        </div>
      </div>
    </div>
  )
  
  return (
      <AppLayout>
      <div className={`container-fluid p-0 ${styles.banner} `}>
        <div className={`${styles.overlay_banner}`}>
          <div className="container d-flex">
            <Title textColor={'white'} bannerColor={'white'} title={uni_name}/>
         </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row gx-2 gy-4">
          <div className=" col-xs-12  col-lg-4 col-xl-3">
            <div className=" border rounded p-3 d-flex flex-column align-items-center">
              <Image width={80} height={80} src={img} objectFit="contain" className="" />
              <h5 className='fw-bold my-2 text-center'>{uniData.univ_name}</h5>
              <hr className={`my-4 ${styles.line}`} />
              <div>
                <div className='d-flex mb-2'>
                  <i className="fas fa-map-marker-alt me-2 text-secondary "></i> <span>{uniData.loc}</span>
                </div>
                <div className='d-flex mb-2'>
                <i className="fas fa-phone-alt me-2 text-secondary "></i> {uniData.contact}
                </div>
                <div className='d-flex mb-2'>
                <i className="fas fa-envelope me-2 text-secondary "></i> {uniData.email}
                </div>
             </div>
              <Button external={true} url={uniData.website_link} text={'Website'} className="px-5 my-3"/>
            </div>
          </div>
          
          <div className="col-xs-12 col-lg-8 col-xl-9">
          <div className="border rounded p-3">
              <h5 className='fw-bold'>University Programs</h5>
          
            <TabContext value={activeTab} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={`mt-5 mb-2 `}>
                <TabList 
                    TabIndicatorProps={{style: {background:'var(--green)'}}} indicatorColor={'secondary'} textColor="black"  onChange={handleTabChange} aria-label="lab API tabs example">
                    {programs && Object.keys(programs).map((data, index) => {
                      let length = programs[data].length
                     return length > 0 && <Tab key={index} label={<TabComponent label={data} number={length}/>} style={{textTransform:'capitalize'}} value={`${index+1}`} />
                  })}
                  
                </TabList>
              </Box>
                {programs && Object.keys(programs).map((data, index) => {
                  return (
                    <TabPanel value={`${index+1}`} key={index}>
                      {
                        programs[data].map((program, index2) => (
                          <Collapsible key={index2} style={{transition:'5s'}} onOpen={() => setIsExpanded(index2)} onClose={() => setIsExpanded(-1)} trigger={<ProgramTitle price={program.fee} title={program.spe_name} isOpen={isExpanded == index2 ? true : false} />}>
                            <ProgramBody program={program}/>
                          </Collapsible>
                        )
                        )
                      }
                    </TabPanel> 
                  )
                
              })}
            </TabContext>

          </div>
          </div>
        </div>
      </div>
      </AppLayout>
  )
}


const TabComponent = ({label,number}) => {
  return (
    <div className={`${styles.tab}`}>{label} <div className={`${styles.program_number}`}>{number}</div></div>
  )
}

