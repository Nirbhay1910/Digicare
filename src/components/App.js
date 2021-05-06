import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Chatbox from './chatComponents/Chatbox';
import CovidHelpingHands from './CovidHelpingHands';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MeetSpecialists from './MeetSpecialists';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/talkWithStrangers'>
            <Chatbox />
          </Route>
          <Route path='/'>
            <HeroSection />
            <CovidHelpingHands />
            <MeetSpecialists />
            <AboutUs />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
