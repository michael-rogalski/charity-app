import React from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';
import { Link } from 'react-router-dom';

function SimpleSteps() {
  return (
    <div className="simple-steps_component">
      <div className="simple-steps_title">
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={Decoration} alt="Decoration" />
      </div>
      <div className="simple-steps_icons_component">
        <div className="simple-steps_icons">
          <div className="select-items">
            <img src={Icon1} alt="Icon1" />
            <h3>Wybierz rzeczy</h3>
            <hr></hr>
            <p>ubrania, zabawki, <br/>sprzęt i inne</p>
          </div>
          <div className="pack-items">
            <img src={Icon2} alt="Icon2" />
            <h3>Spakuj je</h3>
            <hr></hr>
            <p>skorzystaj <br/>z worków na śmieci</p>
          </div>
          <div className="decide-who_help">
            <img src={Icon3} alt="Icon3" />
            <h3>Zdecyduj komu <br/>chcesz pomóc</h3>
            <hr></hr>
            <p>wybierz zaufane <br/>miejsce</p>
          </div>
          <div className="order-courier">
            <img src={Icon4} alt="Icon4" />
            <h3>Zamów kuriera</h3>
            <hr></hr>
            <p>kurier przyjedzie <br/>w dogodnym terminie</p>
          </div>
        </div>
      </div>
      <div className="things-back_button_component">
        <div className="things-back_button">
          <Link to="/logowanie"><p>ODDAJ <br/>RZECZY</p></Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleSteps;