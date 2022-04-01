import { useState, useEffect } from 'react';
import { AppLayout, Title, SearchSection } from '../../components';
import styles from './app.module.css';
import { UniversityCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { load_universities } from '../../redux/actions/';
import Collapsible from 'react-collapsible';
import Link from 'next/link';
import router from 'next/router';

export default function MainApp() {
  const dispatch = useDispatch();
  const universities = useSelector(({ universities }) => universities.university);
  const filter = useSelector(({ filter }) => filter.searchResult);
  console.log(filter);

  useEffect(() => {
    dispatch(load_universities());
  }, []);

  const universityList =
    universities !== null &&
    universities.map((uni, index) => <UniversityCard key={index} uni={uni} />);
  return (
    <AppLayout>
      <div className={`container-fluid ${styles.banner}`}>
        <SearchSection />
      </div>
      <div className="container">
        <Title heading={'mt-5'} title={filter ? "FILTER RESULT" : 'LIST OF UNIVERSITIES IN CAMEROON'} />
        <div className="row g-4">
          {!filter && universityList}
          {filter && <Filter programs={filter.university} />}
        </div>
      </div>
    </AppLayout>
  );
}

const Filter = ({ programs }) => {
  const [isExpanded, setIsExpanded] = useState(-1);

  console.log(programs);
  return (
    programs.length > 0 &&
    programs.map((program, index2) =>
      <Collapsible
        className="py-2"
        open={index2 !== isExpanded ? false : true}
        key={index2}
        onTriggerOpening={() => setIsExpanded(index2)}
        onTriggerClosing={() => setIsExpanded(-1)}
        trigger={
          <ProgramTitle
            fac={program?.univ_id}
            price={program.fee}
            title={program.spe_name}
            isOpen={isExpanded == index2 ? true : false}
          />
        }
      >
        <ProgramBody program={program} />
      </Collapsible>
    ))
}

const ProgramTitle = ({ isOpen, title, price, fac}) => {
  const goToLink = (university,id,data) => {
    router.push({pathname:`/universities/${university}/${id}`,query:{data:encodeURIComponent(JSON.stringify(data))}})
  }
  return (
    <div
      className={`${styles.single_program} ${
        isOpen && 'border-0 '
      } d-flex flex-column flex-md-row justify-content-start`}
      style={{ marginTop: isOpen && '1.2rem', transition: 'all 0.2s' }}
    >
      <div className="d-flex align-items-center">
        <i className={`fas fa-caret-${isOpen ? 'down' : 'right'} d-none d-md-block me-2`}></i>
        <div className={`ms-0 ${styles.program_title}`}>
          <span
            style={{ textTransform: 'capitalize', color: isOpen && 'var(--green)' }}
            className={`${isOpen ? 'fw-bold' : 'fw-normal'}`}
          >{`${title.toLocaleLowerCase()} (${fac?.univ_name?.toLocaleLowerCase()})`}</span>
        </div>
        <i
          className={`fas fa-caret-${isOpen ? 'down' : 'right'} d-block d-md-none ms-auto ms-md-0`}
        ></i>
      </div>
      {!isOpen && <div onClick={()=>goToLink(fac?.univ_name,fac?._id,fac)} style={{color:'var(--green)',textDecoration:'underline'}} className={`${styles.price} fw-bold ms-0 ms-md-auto underline`}>Go to university</div>}
    </div>
  );
};

const ProgramBody = ({ program }) => (
  <div className={`${styles.program_detail_section} mb-4 p-3 border rounded bg-light`}>
    <div className="row">
      <div className="col-12 col-md-6">
        <h6 className="fw-bold">
          <span style={{ textTransform: 'capitalize' }}>{program.deg_type} </span> in{' '}
          {program.spe_name} from {program.dep_id?.fact_id?.fact_name}
        </h6>
        <div className="my-3 d-flex">
          <span className={` ${styles.icon}`}>
            <i className={`fas fa-clock text-secondary`}></i>
          </span>
          <span className="ms-2">Duration:</span>
          <span>{program.duration}</span>
        </div>

        <div className="my-3 d-flex">
          <span className={` ${styles.icon}`}>
            <i className={`fas fa-money-bill-alt text-secondary`}></i>
          </span>
          <span className="ms-2">Fee:</span>
          <span>{program.fee} FCFA / year</span>
        </div>

        <div className="my-3 d-flex">
          <span className={` ${styles.icon}`}>
            <i className={`fas fa-globe-europe text-secondary`}></i>
          </span>
          <span className="ms-2">Language:</span>
          <span>English</span>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <h6 className="fw-bold">Requirements</h6>
        {program.requirements.map((req, index) => (
          <div key={index}>- {req}</div>
        ))}
      </div>
    </div>
  </div>
);
