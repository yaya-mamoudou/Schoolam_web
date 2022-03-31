import { useState, useEffect} from 'react';
import { AppLayout, Title, SearchSection } from '../../components';
import styles from './app.module.css'
import { UniversityCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { load_universities} from '../../redux/actions/'

export default function MainApp() {

  const dispatch = useDispatch()
  const universities = useSelector(({ universities }) => universities.university)

  useEffect(() => {
    dispatch(load_universities())
  }, [])
  
  const universityList = universities !== null && universities.map((uni,index) =><UniversityCard key={index} uni={uni}/> )
  return (
    <AppLayout>
      <div className={`container-fluid ${styles.banner}`}>
        <SearchSection/>
      </div>
      <div className="container">
        <Title heading={'mt-5'} title={'LIST OF UNIVERSITIES IN CAMEROON'} />
          <div className="row g-4">
            {universityList}
          </div>
      </div>
    </AppLayout>
  )
}

