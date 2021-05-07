import React from 'react';
import './css/docCard.css';

function DocCard({ name, image, experience, speciality }) {
  return (
    <div className='docCard'>
      <div className='specialists'>
        <img src={image} alt='doc img' />
        <div className='doc_info'>
          <h2>Dr. {name}</h2>
          <h2>{speciality}</h2>
          <h2>experience of {experience} years</h2>
        </div>
        <div className='see_all'>
          <h2>Consult Now</h2>
        </div>
      </div>
    </div>
  );
}

export default DocCard;
