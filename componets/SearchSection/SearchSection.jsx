import React from 'react'
import styles from './searchSection.module.css'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function SearchSection() {
  return (
    <div className="container py-3">
          <div className="row mb-3 pe-2">
            <div className="col-10 col-sm-9">
              <input type="text" placeholder='Search' id="inputPassword5" className="form-control" />
            </div>
            <button className={`btn d-flex col-2 col-sm-2  justify-content-center align-items-center  btn-sm ${styles.search_btn}`}>
              <i className="fas fa-search"></i>
              <span className='d-none d-sm-block'>Search</span>
            </button>
          </div>
          <div className='row'>
            <div className="mb-2 col-6 col-sm-3">
              <label className='text-white'>Degree</label>
              <Select isClearable={true}  options={options}/>
            </div>
            <div className="mb-2 col-6 col-sm-3">
              <label className='text-white'>location</label>
              <Select isClearable={true}  options={options}/>
            </div>
            <div className="mb-2 col-12 col-sm-3">
              <label className='text-white'>language</label>
              <Select isClearable={true} options={options}/>
            </div>
          </div>
        </div>
  )
}
