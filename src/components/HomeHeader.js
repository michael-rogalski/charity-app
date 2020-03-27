import React from 'react';
import './App/App.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import Decoration from '../assets/Decoration.svg';
import HomeHeroImage from '../assets/Home-Hero-Image.jpg';

function HomeHeader() {
  return (
      <div className="home-header">
        <div className="login">
          <ul>
              <Link to="/logowanie"><li>Zaloguj</li></Link>
              <Link to="/rejestracja"><li>Załóż konto</li></Link>
          </ul>
        </div>
        <nav>
            <ul>
            <ScrollLink to="three-columns_component" spy={true} smooth={true} offset={50} duration={500}>
                <li>
                    Start
                </li>
            </ScrollLink>
            <ScrollLink to="simple-steps_component" spy={true} smooth={true} offset={50} duration={500}>
                <li>
                    O co chodzi?
                </li>
            </ScrollLink>
            <ScrollLink to="about-us_component" spy={true} smooth={true} offset={50} duration={500}>
                <li>
                    O nas
                </li>
            </ScrollLink>
            <ScrollLink to="who-we_help_component" spy={true} smooth={true} offset={50} duration={500}>
                <li>
                    Fundacja i organizacje
                </li>
            </ScrollLink>
            <ScrollLink to="contact_component" spy={true} smooth={true} offset={50} duration={500}>
                <li>
                    Kontakt
                </li>
            </ScrollLink>
            </ul>
        </nav>
        <div className="help-choice_component">
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={Decoration} alt="Decoration" />
            <div className="choice-buttons">
                <Link to="/logowanie"><p>ODDAJ <br/>RZECZY</p></Link>
                <Link to="/logowanie"><p>ZORGANIZUJ <br/>ZBIóRKĘ</p></Link>
            </div>
        </div>
        <div className="hero-image">
            <img src={HomeHeroImage} alt="HeroImage" />
        </div>
      </div>
  );
}

export default HomeHeader;