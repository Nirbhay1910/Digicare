import React from 'react';
import Chat from './Chat';
import ChatSidebar from './ChatSidebar';
import '../css/chatbox.css';
import Footer from '../Footer';
import Login from '../Login';
import { Redirect } from 'react-router';
import { useStateValue } from '../../StateProvider';
function Chatbox() {
  const [{ user }, dispatch] = useStateValue();
  if (user) {
    return (
      <div>
        <div className='chatbox'>
          <div className='chatbox_body'>
            <ChatSidebar />
            <Chat />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Redirect to='/signin' />;
  }
}

export default Chatbox;
