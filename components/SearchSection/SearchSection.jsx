import React from 'react'
import styles from './searchSection.module.css'
import Select from 'react-select'



export default function SearchSection() {
  return (
    <div className="container py-3">
          <div className="row mb-3 pe-2">
            <div className="col-6 col-sm-3">
              <label className='text-white'>Degree</label>
              <Select isClearable={true}  options={degrees}/>
            </div>
            <div className="col-6 col-sm-3">
              <label className='text-white'>location</label>
              <Select isClearable={true}  options={locations}/>
            </div>
            <div className="col-12 col-sm-3">
              <label className='text-white'>language</label>
              <Select isClearable={true} options={languages}/>
            </div>
            <div className='col-2 col-sm-2 '>
              <label className='invisible' htmlFor="">Yaya</label>
              <button className={`btn d-flex justify-content-center align-items-center w-100  btn-sm ${styles.search_btn}`}>
                <i className="fas fa-search"></i>
                <span className='d-none d-sm-block fa-x2 ms-1'>Filter</span>
              </button>
            </div>
          </div>
        </div>
  )
}


const degrees = [
  { value: 'masters', label: 'Masters' },
  { value: 'bachelors', label: 'Bachelors' },
  { value: 'phd', label: 'Phd' },

  
]

const languages = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
]

const locations = [
  { value: 'ADAMAWA REGION', label: 'Adamawa region' },
  { value: 'EAST REGION', label: 'East region' },
  { value: 'CENTRE REGION', label: 'Center region' },
  { value: 'FAR NORTH REGION', label: 'Far North region' },
  { value: 'LITTORAL REGION', label: 'Littoral region' },
  { value: 'NORTH REGION', label: 'North region' },
  { value: 'NORTH WEST REGION', label: 'North West region' },
  { value: 'WEST REGION', label: 'West region' },
  { value: 'SOUTH REGION', label: 'South region' },
  { value: 'SOUTH WEST REGION', label: 'South West region' },
]
