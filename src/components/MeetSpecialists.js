import React from 'react';
import { Button } from '@material-ui/core';
import './css/meetSppecialists.css';
import doct1 from '../images/doc-1.jpg';
import doct2 from '../images/doc-2.jpg';
import doct3 from '../images/doc-3.jpg';

function MeetSpecialists() {
  return (
    <div className='meetSpecialists'>
      <div className='meetSpecialists_title'>
        <h1>Meet our specialists</h1>
      </div>
      <div className='specialists_box'>
        <div className='specialists'>
          <img src={doct1} alt='doc img' />
          <div className='doc_info'>
            <h2> Dr. Vanshika Thakur</h2>
            <h2> MBBS</h2>
            <h2> Cardiologist</h2>
          </div>
        </div>
        <div className='specialists'>
          <img src={doct2} alt='doc img' />
          <div className='doc_info'>
            <h2> Dr. Ankush Jha</h2>
            <h2> MBBS</h2>
            <h2> Orthopaedic surgeon</h2>
          </div>
        </div>
        <div className='specialists'>
          <img src={doct3} alt='doc img' />
          <div className='doc_info'>
            <h2> Dr. Gajveer Singh</h2>
            <h2> MBBS</h2>
            <h2> Neurologist</h2>
          </div>
        </div>
      </div>
      <div className='see_all'>
        <Button className='btn'>See All</Button>
      </div>
    </div>
  );
}

export default MeetSpecialists;
