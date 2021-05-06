import React from 'react';
import AboutUs from './AboutUs';
import CovidHelpingHands from './CovidHelpingHands';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MeetSpecialists from './MeetSpecialists';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CovidHelpingHands />
      <MeetSpecialists />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
