import Image from 'next/image';
import styles from './universityCard.module.css'
import Link from 'next/link';

let img = 'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png'

export default function UniversityCard ({uni}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div  style={{ height: '100%' }} className={`px-5 py-4 d-flex flex-column shadow border position-relative ${styles.card}`}>
          <Image objectFit="contain" className='align-self-center' width={50} height={50} src={img}/>
          <h6 className='fw-bold text-center mt-2'>{uni.univ_name}</h6>
          <div className='d-flex mt-2'>
            <i style={{width:20}} className="fas fa-hands text-secondary me-1"></i>
            <div>{uni.motto}</div>
          </div>
          <div className='d-flex mt-2'>
            <i style={{width:20}} className="fas fa-map-marker-alt text-secondary me-1"></i>
            <div>{uni.loc}</div>
          </div>
          <button type='button' className={`btn btn-sm my-2 ${styles.language_btn}`}>{uni.lang}</button>
          <Link  href={{ pathname: `/university/${uni.name}`,query:{data:encodeURIComponent(JSON.stringify(uni))} }}>
            <button type='button' role={"button"} className={`btn btn-sm mt-auto ${styles.see_more_btn}`}>See more</button>
          </Link>
        </div>
      </div>
  )
}
