import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Chatbox from './chatComponents/Chatbox';
import CovidHelpingHands from './CovidHelpingHands';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MeetSpecialists from './MeetSpecialists';
import Navbar from './Navbar';
import Login from './Login';
import Account from './Account';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/talkWithStrangers'>
            <Chatbox />
          </Route>
          <Route path='/signin'>
            <Login />
            <Footer />
          </Route>
          <Route path='/myAccount'>
            <Account />
          </Route>
          <Route path='/'>
            <HeroSection />
            <MeetSpecialists />
            <CovidHelpingHands />
            <AboutUs />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
