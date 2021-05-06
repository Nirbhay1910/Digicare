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
          <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public#:~:text=Protect%20yourself%20and%20others%20from,a%20bent%20elbow%20or%20tissue.'>
            <h2>Advisories</h2>
            <img src={advisories_img} alt='advisories img' />
          </a>
        </div>
        <div className='advisories'>
          <a href='https://www.cowin.gov.in/'>
            <h2>Vaccine</h2>
            <img src={vaccine_img} alt='vaccine img' />
          </a>
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
