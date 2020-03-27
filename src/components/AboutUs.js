import React from 'react';
import './App/App.scss';
import People from '../assets/People.jpg';
import Decoration from '../assets/Decoration.svg';
import Signature from '../assets/Signature.svg';

function AboutUs() {
  return (
    <div className="about-us_component">
        <div className="about-us_info_section">
            <div className="about-us_info_section_inside">
                <h1>O nas</h1>
                <img src={Decoration} alt="Decoration" />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="about-us_signature">
                    <img src={Signature} alt="Signature" />
                </div>
            </div>
        </div>
        <div className="about-us_picture">
            <img src={People} alt="People" />
        </div>
    </div>
  );
}

export default AboutUs;