import React, { useEffect, useState } from 'react';
import '../css/chatSidebar.css';
import { Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
function ChatSidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className='chatSidebar'>
      <div className='chatSidebar__header'>
        <Avatar src={user.photoURL} />
        <div className='chatSidebar__headerRight'>
          <h2>{user.displayName}</h2>
        </div>
      </div>

      <div className='chatSidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
