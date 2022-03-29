import React,{useEffect} from 'react'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Box,Drawer,List,Divider,ListItem,ListItemIcon,ListItemText} from '@mui/material'

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const { pathname } = useRouter()
  
  useEffect(() => {
    let nav = document.getElementById('navbar')
    console.log(nav.clientHeight);
    return () => {
      
    }
  }, [])
  

    const toggleDrawer = () => {
        setState(!state);
    };

    const list = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {['Home', 'Universities', 'FAQ',].map((text, index) => (
              <ListItem button key={index}>
                <Link href={text=='Home'?'/':text=='Universities'?'/universities':text == 'FAQ' && '/faq' }>
                    <div className='w-100'>
                        <div className='fw-bold'>{text}</div>
                        <Divider className='mt-3' />
                    </div>
                </Link>
              </ListItem>
            ))}
          </List>
          
        </Box>
      );
    
  return (
    <div id='navbar' style={pathname == '/' ? { borderBottom: 'none', backgroundColor: 'var(--hero-bg'} :{}} className={`${styles.navbar} container-fluid`}>
          <div className="container px-2 px-sm-3 d-flex py-3">
              <Link href="/">
                <div role={"button"} className="logo-container d-flex align-items-center ">
                  <Image width={30} height={30} src={logo} alt="logo" />
                  <span className='ms-2'>Schoolam</span>
                </div>
              </Link>
              <div className={`d-flex ms-auto align-items-center d-none d-sm-block  ${styles.nav_links}`}>
                  <span><Link href="/">Home</Link></span>
                  <span><Link href="/universities">Universities</Link></span>
                  <span>FAQ</span>
              </div>
              <span onClick={toggleDrawer} className="align-self-center d-block d-sm-none ms-auto ">
              <i  className={`fas fa-bars`}></i>
               </span>
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer}
                >
                    {list()}
                </Drawer>
          </div>
         
        
    
    </div>
  )
}

