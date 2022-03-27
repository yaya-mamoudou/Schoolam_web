import { useState,useEffect } from 'react'
import { AppLayout, Button, Title } from '../../../componets'
import styles from './university.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {Box,Tab} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import Collapsible from 'react-collapsible';

export default function University() {
  const router = useRouter()
  const { uni, data } = router.query
  const [uniData, setUniData] = useState({})
  const [activeTab, setActiveTab] = useState('1')
  const [isExpanded, setIsExpanded] = useState(-1)
  const [sectionOpen, setSectionOpen] = useState(0)
  
  const handleTabChange = (e,value) => {
    setActiveTab(value);
    setIsExpanded(-1)
  }

  const ProgramTitle = ({isOpen}) => (
    <div 
      className={`${styles.single_program} ${isOpen && 'border-0 '} d-flex align-items-center`}>
      <i className="fas fa-caret-down"></i>
      <div className={`ms-2 ${styles.program_title}`}>Agriculture</div>
      {!isOpen && <div className={`${styles.price}`}>~50000 FCFA / year</div>}
    </div>
  )

  const ProgramBody = () => (
    <div className={`${styles.program_detail_section} mb-4 p-3 border rounded`}>
      <h6 className='fw-bold'>Bachelor's in Agriculture</h6>
      <div className='my-3 d-flex'>
        <span className={` ${styles.icon}`}>
        <i className={`fas fa-clock text-secondary`}></i>
        </span>
        <span className='me-2'>Duration:</span>
        <span>3 years</span>
      </div>

      <div className='my-3 d-flex'>
        <span className={` ${styles.icon}`}>
        <i className={`fas fa-money-bill-alt text-secondary`}></i>
        </span>
        <span className='me-2'>Fee:</span>
        <span>50000 FCFA / year</span>
      </div>

      <div className='my-3 d-flex'>
        <span className={` ${styles.icon}`}>
        <i className={`fas fa-globe-europe text-secondary`}></i>
        </span>
        <span className='me-2'>Language:</span>
        <span>English</span>
      </div>

      <Button url={""} text={'Requirements'} className="px-4 my-3 btn-secondary"/>
    </div>
  )
  
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
        <div className="row gx-2 gy-4">
          <div className=" col-xs-12  col-lg-4 col-xl-3">
            <div className=" border rounded p-3 d-flex flex-column align-items-center">
              <Image width={80} height={80} src={uniData.img} objectFit="contain" className="" />
              <h5 className='fw-bold my-2'>{uniData.name}</h5>
              <hr className={`my-4 ${styles.line}`} />
              <div>
                <div className='d-flex mb-2'>
                  <i className="fas fa-map-marker-alt me-2 text-secondary "></i> <span>{uniData.location}</span>
                </div>
                <div className='d-flex mb-2'>
                <i className="fas fa-phone-alt me-2 text-secondary "></i> {uniData.phone}
                </div>
                <div className='d-flex mb-2'>
                <i className="fas fa-envelope me-2 text-secondary "></i> {uniData.email}
                </div>
             </div>
              <Button external={true} url={uniData.website} text={'Website'} className="px-5 my-3"/>
            </div>
          </div>
          
          <div className="col-xs-12 col-lg-8 col-xl-9">
          <div className="border rounded p-3">
              <h5 className='fw-bold'>University Programs</h5>
          
            <TabContext value={activeTab} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }} Name={`mt-5 mb-2 `}>
                  <TabList 
                    TabIndicatorProps={{style: {background:'var(--green)'}}} indicatorColor={'secondary'}  onChange={handleTabChange} aria-label="lab API tabs example">
                  <Tab label={<TabComponent label={'Bachelor'} number="5"/>} style={{textTransform:'capitalize'}} value="1" />
                  <Tab label={<TabComponent label={'Master'} number="3"/>} style={{textTransform:'capitalize'}} value="2" />
                  <Tab label={<TabComponent label={'PhD'} number="2"/>} style={{textTransform:'capitalize'}} value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                  {Array(5).fill(0).map((data, index) =>
                    <Collapsible  style={{transition:'5s'}} onOpen={() => setIsExpanded(index)} onClose={() => setIsExpanded(-1)} trigger={<ProgramTitle isOpen={isExpanded == index ? true : false} />}>
                    <ProgramBody/>
                    </Collapsible>
                  )
                  }
              </TabPanel>
              <TabPanel value="2">
                  {Array(3).fill(0).map((data, index) =>
                    <Collapsible onOpen={() => setIsExpanded(index)} onClose={() => setIsExpanded(-1)} trigger={<ProgramTitle isOpen={isExpanded == index ? true : false} />}>
                    <ProgramBody/>
                    </Collapsible>
                  )
                  }
              </TabPanel>
              <TabPanel value="3">
                  {Array(2).fill(0).map((data, index) =>
                    <Collapsible onOpen={() => setIsExpanded(index)} onClose={() => setIsExpanded(-1)} trigger={<ProgramTitle isOpen={isExpanded == index ? true : false} />}>
                    <ProgramBody/>
                    </Collapsible>
                  )
                  }
              </TabPanel>
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

