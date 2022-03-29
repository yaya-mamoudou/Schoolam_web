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
      <div className={`container-fluid ${styles.banner} `}>
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

const universities = [
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Bamenda', moto: 'Knowledge, Probity, Entrepreneurship', location: 'Bamenda, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Douala',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Ngaoundere',moto:'The place to be',location:'Buea, Cameroon',languages:['English',],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  { img: 'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Dschang', moto: 'The place to be', location: 'Buea, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm' },
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Yaounde', moto: 'Knowledge, Probity, Entrepreneurship', location: 'Bamenda, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm' },
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Buea',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Yaounde II',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  { img: 'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Buea', moto: 'The place to be', location: 'Buea, Cameroon', languages: ['English'], email: 'ubuea@gmail.com', phone: "+237 683 782 902", website: 'https://www.ubuea.cm' },
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Bamenda', moto: 'Knowledge, Probity, Entrepreneurship', location: 'Bamenda, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Douala',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Ngaoundere',moto:'The place to be',location:'Buea, Cameroon',languages:['English',],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  { img: 'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Dschang', moto: 'The place to be', location: 'Buea, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm' },
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png', name: 'University of Yaounde', moto: 'Knowledge, Probity, Entrepreneurship', location: 'Bamenda, Cameroon', languages: ['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm' },
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Buea',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Yaounde II',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
  {img:'https://ubuea.cm/wp-content/uploads/2021/12/ublogo2-2-60x60.png',name:'University of Buea',moto:'The place to be',location:'Buea, Cameroon',languages:['English'],email:'ubuea@gmail.com',phone:"+237 683 782 902",website:'https://www.ubuea.cm'},
]
