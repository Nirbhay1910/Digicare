import React from 'react';
import Chat from './Chat';
import ChatSidebar from './ChatSidebar';
import '../css/chatbox.css';
import Footer from '../Footer';
function Chatbox() {
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
}

export default Chatbox;
