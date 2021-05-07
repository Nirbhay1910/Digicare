import React, { useEffect, useState } from 'react';
import { dataDoc } from '../dataDoc';
import DocCard from './DocCard';
import './css/consultDoctor.css';
import { useHistory, useParams } from 'react-router';
import illustration_consultation from '../images/illustration_consultation.jpeg';

function ConsultDoctor() {
  const [doctors, setDoctors] = useState([]);
  const { specialityRequired } = useParams();
  const [input, setInput] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (specialityRequired) {
      const data = dataDoc.filter(
        (doctor) => doctor.speciality === specialityRequired
      );
      setDoctors(data);
    } else {
      setDoctors(dataDoc);
    }
  }, [specialityRequired]);

  const searchDoc = (e) => {
    e.preventDefault();
    history.push(`/consultDoctors/${input}`);
    setInput('');
  };
  return (
    <div className='consultDoctor'>
      <div className='consultDoc__hero'>
        <form>
          <h1>Search Doctors by their speciality</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='search doctors by their speciality...'
          ></input>
          <button onClick={searchDoc} type='submit'>
            search
          </button>
        </form>
        <img src={illustration_consultation} alt='' />
      </div>
      <div className='docCards'>
        {doctors.map((doctor) => (
          <DocCard
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultDoctor;
