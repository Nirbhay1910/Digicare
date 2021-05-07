import React from 'react';
import Chat from './Chat';
import ChatSidebar from './ChatSidebar';
import '../css/chatbox.css';
import Footer from '../Footer';
import { Redirect, Route, Router, Switch } from 'react-router';
import { useStateValue } from '../../StateProvider';
function Chatbox() {
  const [{ user }, dispatch] = useStateValue();
  if (user) {
    return (
      <div>
        <div className='chatbox'>
          <div className='chatbox_body'>
            <ChatSidebar />
            <Switch>
              <Route path='/talkWithStrangers/rooms/:roomId'>
                <Chat />
              </Route>
            </Switch>
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
