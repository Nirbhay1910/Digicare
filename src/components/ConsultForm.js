import React from 'react';
import './css/consultForm.css';
import formImg from '../images/form-img.png';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router';

function ConsultForm() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  console.log(user);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Your appointment is booked. We will contact you within 48 hours.');
    history.push('/');
  };
  if (!user) {
    return (
      <h1 className='notLoggedin'>Please login to access this feature.</h1>
    );
  }
  return (
    <div className='consultForm'>
      <div className='left'>
        <img src={formImg} alt='' />
      </div>
      <div className='right'>
        <h1>Tell us about yourself</h1>
        <form>
          <label>Name: </label>
          <input required='true' value={user.displayName} />
          <label>Email: </label>
          <input value={user.email} required='true' type='email' />
          <label>Symptoms: </label>
          <textarea required={true}></textarea>
          <button type='submit' onClick={(e) => handleFormSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultForm;
