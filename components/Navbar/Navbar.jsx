import React, { useEffect,useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Navbar() {
  const [state, setState] = useState(false);
  const { pathname } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    let nav = document.getElementById('navbar')
  }, [])

  const toggleMenu = () => {
    
  }
  
  const submit = () => {
    
  }

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
    <div id='navbar' style={pathname == '/' ? { borderBottom: 'none', backgroundColor: 'var(--hero-bg'} :{backgroundColor: 'white',zIndex:10000}} className={`${styles.navbar} container-fluid`}>
          <div className="container px-2 px-sm-3 d-flex py-3">
              <Link  href="/">
                <div role={"button"} className="logo-container me-auto d-flex align-items-center ">
                  <Image width={30} height={30} src={logo} alt="logo" />
                  <span className='ms-2'>Sooschool</span>
                </div>
              </Link>
              {pathname == '/universities' && <span className='ms-auto me-3 align-self-center' onClick={()=>setIsSearchOpen(!isSearchOpen)}><i className="fas fa-search"></i></span>}
              <div className={`d-flex align-items-center d-none d-sm-block  ${styles.nav_links}`}>
                  {/* <span onClick={toggleMenu}><i className="fas fa-search"></i></span> */}
                  <span><Link href="/">Home</Link></span>
                  <span><Link href="/universities">Universities</Link></span>
                  <span>FAQ</span>
              </div>
              <span onClick={toggleDrawer} className={`align-self-center d-block d-sm-none ${pathname !== '/universities' && "ms-auto"}`}>
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
          {isSearchOpen && <div className="py-2 bg-white">
            <div className="container">
              <div className="row justify-content-center mt-3">
                <div className="col-10 col-md-5">
                  <input autoFocus type="text" placeholder='Search' id="inputPassword5" className="form-control" />
                </div>
                
                <button style={{backgroundColor:'var(--green)'}} className={`btn d-flex  text-white col-2 col-md-1  justify-content-center align-items-center  btn-sm ${styles.search_btn}`}>
                  <i className="fas fa-search"></i>
                  <span className='d-none d-sm-block' onClick={submit}>Search</span>
                </button>
              </div>
            </div>
          </div>}
       
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </div>
  );
}
