import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { auth, provider } from '../firebase';
import './css/login.css';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import logo from '../images/logo.png';

function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src={logo} alt='' />
        <div className='login__text'>
          <h1>Signin to DIGICARE</h1>
        </div>
        <Button type='submit' onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
