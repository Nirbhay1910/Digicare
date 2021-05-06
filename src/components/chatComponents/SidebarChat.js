import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/sidebarChat.css';

function SidebarChat({ addNewChat, name }) {
  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
      </div>
    </div>
  ) : (
    <div className='sidebarChat'>
      <h2>Add New Interest</h2>
    </div>
  );
}

export default SidebarChat;
