import React from 'react';
import '../css/chatSidebar.css';
import { Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function ChatSidebar() {
  return (
    <div className='chatSidebar'>
      <div className='chatSidebar__header'>
        <Avatar />
        <div className='chatSidebar__headerRight'>
          <h2>Welcome Rohan</h2>
        </div>
      </div>

      <div className='chatSidebar__chats'>
        <SidebarChat addNewChat />
        <SidebarChat name='Cricket' />
        <SidebarChat name='Politics' />
        <SidebarChat name='Covid-resources' />
        <SidebarChat name='Relationships' />
      </div>
    </div>
  );
}

export default ChatSidebar;
