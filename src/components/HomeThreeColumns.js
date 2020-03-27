import React from 'react';
import './App/App.scss';
import ThreeColumns from '../assets/3_Columns_Background.png';

function HomeThreeColumns() {
  return (
    <div className="three-columns_component" name="three-columns_component">
        <div className="three-columns_paragraphs">
          <div className="three-columns_bags">
            <h1>10</h1>
            <h2>ODDANYCH WORKóW</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat maximus malesuada. Donec id magna in risus.</p>
          </div>
          <div className="three-columns_organizations">
            <h1>5</h1>
            <h2>WSPARTYCH ORGANIZACJI</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat maximus malesuada. Donec id magna in risus.</p>
          </div>
          <div className="three-columns_collections">
            <h1>7</h1>
            <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat maximus malesuada. Donec id magna in risus.</p>
          </div>
        </div>
      <img src={ThreeColumns} alt="ThreeColumns" />
    </div>
  );
}

export default HomeThreeColumns;