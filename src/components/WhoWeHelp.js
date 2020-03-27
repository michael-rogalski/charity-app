import React from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';

function WhoWeHelp() {
  return (
    <div className="who-we_help_component">
        <div className="who-we_help_title">
            <h1>Komu pomagamy?</h1>
            <img src={Decoration} alt="Decoration" />
        </div>
        <div className="choice-buttons">
            <p>Fundacjom</p>
            <p>Organizacjom <br/>pozarządowym</p>
            <p>Lokalnym <br/>zbiórkom</p>
        </div>
        <div className="who-we_help_text">
            <div className="who-we_help_text_inside">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
        </div>
    </div>
  );
}

export default WhoWeHelp;