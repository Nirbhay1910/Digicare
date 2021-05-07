import React from 'react';
import { Button } from '@material-ui/core';
import './css/meetSppecialists.css';
import doct1 from '../images/talk2.jpg';
import doct2 from '../images/talk1.jpg';

function MeetSpecialists() {
  return (
    <div className='meetSpecialists'>
      <div className='meetSpecialists_title'>
        <h1>Talk to a ...</h1>
      </div>
      <div className='specialists_box'>
        <div className='specialists'>
          <img src={doct1} alt='doc img' />
          <div className='doc_info'>
            <h2>Covid Recovered Person</h2>
          </div>
        </div>
        <div className='specialists'>
          <img src={doct2} alt='doc img' />
          <div className='doc_info'>
            <h2>Stranger</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetSpecialists;
