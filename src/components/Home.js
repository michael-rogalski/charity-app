import React from 'react';
import './App/App.scss';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import SimpleSteps from './SimpleSteps';

function Home() {
  return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <SimpleSteps />
      </>
  );
}

export default Home;