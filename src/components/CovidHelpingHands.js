import React from 'react';
import './css/covidHelplingHands.css';
import vaccine_img from '../images/vaccine_img.png';
import advisories_img from '../images/advisories_image.png';
import consult_doc_img from '../images/consult_doctor_img.png';

function CovidHelpingHands() {
  return (
    <div className='covidHelpingHands'>
      <div className='covid_title'>
        <h1>Covid-19 Helping Hands</h1>
      </div>
      <div className='covid-19_box'>
        <div className='advisories'>
          <h2>Advisories</h2>
          <img src={advisories_img} alt='advisories img' />
        </div>
        <div className='advisories'>
          <h2>Vaccine</h2>
          <img src={vaccine_img} alt='vaccine img' />
        </div>
        <div className='advisories'>
          <h2>Consult Doctor</h2>
          <img src={consult_doc_img} alt='consult doc img' />
        </div>
      </div>
    </div>
  );
}

export default CovidHelpingHands;
