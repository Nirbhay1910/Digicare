import React from 'react';
import { useStateValue } from '../StateProvider';
import './css/account.css';

function Account() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) {
    return (
      <div>
        <h1>You need to be logged in for accessing this url</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>My Account</h1>
      </div>
    );
  }
}

export default Account;
