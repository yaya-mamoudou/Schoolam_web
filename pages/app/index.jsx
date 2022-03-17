import React from 'react';
import { AppLayout } from '../../componets';
import styles from './app.module.css'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export default function MainApp() {
  return (
    <AppLayout>
      <div className={`container-fluid ${styles.form_body} `}>
        <div className="container py-3">
          <div className="row mb-3">
            <div className="col-9">
              <input type="text" placeholder='Search' id="inputPassword5" class="form-control" />
              {/* <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div> */}
            </div>
            <button className={`btn col-2 btn-sm ${styles.search_btn}`}>Search</button>
          </div>
          <div className='row'>
            <div className="mb-2 col-3">
              <label className='text-white'>Degree</label>
              <Select isClearable={true}  options={options}/>
              {/* <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div> */}
            </div>
            <div className="mb-2 col-3">
              <label className='text-white'>location</label>
              <Select isClearable={true}  options={options}/>
              {/* <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div> */}
            </div>
            <div className="mb-2 col-3">
              <label className='text-white'>language</label>
              <Select isClearable={true} options={options}/>
              {/* <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )

}
