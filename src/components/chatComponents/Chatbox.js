import React from 'react';
import Chat from './Chat';
import ChatSidebar from './ChatSidebar';
import '../css/chatbox.css';
function Chatbox() {
  return (
    <div className='chatbox'>
      <div className='chatbox_body'>
        <ChatSidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Chatbox;
