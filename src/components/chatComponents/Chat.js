import React from 'react';
import '../css/chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  InsertEmoticon,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Cricket</h3>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Rohan</span>
          Hi guys! how are you?
          <span className='chat__timestamp'>9:16pm</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className='chat__name '>Rohan</span>
          Hi! I am fine. What about you?
          <span className='chat__timestamp'>9:18pm</span>
        </p>
      </div>
      <civ className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input placeholder='type a message' />
          <button type='submit'>Send a message</button>
        </form>
        <MicOutlined />
      </civ>
    </div>
  );
}

export default Chat;
