import React from 'react';
import './App/App.scss';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';

function Home() {
  return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <SimpleSteps />
        <AboutUs />
      </>
  );
}

export default Home;