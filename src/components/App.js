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
import ConsultDoctor from './ConsultDoctor';
import ConsultForm from './ConsultForm';
import VideoCall from './VideoCall';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/talkWithStrangers'>
            <Navbar />
            <Chatbox />
          </Route>
          <Route path='/signin'>
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route path='/myAccount'>
            <Navbar />
            <Account />
          </Route>
          <Route path='/consultDoctors/:specialityRequired'>
            <Navbar />
            <ConsultDoctor />
          </Route>
          <Route path='/consultDoctors'>
            <Navbar />
            <ConsultDoctor />
            <Footer />
          </Route>
          <Route path='/consultForm'>
            <Navbar />
            <ConsultForm />
            <Footer />
          </Route>
          <Route path='/videoCall'>
            <VideoCall />
          </Route>

          <Route path='/'>
            <Navbar />
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
