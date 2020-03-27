import React from 'react';
import './App/App.scss';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import Contact from './Contact';

function Home() {
  return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <SimpleSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
      </>
  );
}

export default Home;