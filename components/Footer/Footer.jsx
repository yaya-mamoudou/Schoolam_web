import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={`container-fluid mt-5 ${styles.footer}`}>
      <div className={`container `}>
        <div className="row py-4  justify-content-between">
          <div className="col-auto  d-flex flex-column">
            <h6>Location</h6>
            <span>Buea,Cameroon</span>
            <span>Email: schoolam@gmail.com</span>
          </div>
          
          <div className="col-auto align d-flex flex-column">
            <h6>Contact</h6>
            <span>Tel: +237 694 996 019</span>
            <span>Email: schoolam@gmail.com</span>
          </div>
          
          <div className="col-auto d-flex flex-column">
            <h6>Social Media</h6>
            <div> 
                <i className={`fab fa-twitter ${styles.twitter_icon}`}></i>
                <i className={`fab fa-facebook  ${styles.fb_icon}`}></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer_sub} text-center`}>
        <span>Powered by Schoolam</span>
      </div>
    </div>
  );
}
