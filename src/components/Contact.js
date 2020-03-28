import React from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';
import BackgroundContactForm from '../assets/Background-Contact-Form.jpg';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact_component">
        <div className="contact_info_section">
            <div className="contact_picture">
                <img src={BackgroundContactForm} alt="BackgroundContactForm" />
            </div>
            <div className="contact_info_section_inside">
                <h1>Skontaktuj się z nami</h1>
                <img src={Decoration} alt="Decoration" />
                <div className="contact-form">
                    <div className="contact-form_name_and_email">
                        <label>Wpisz swoje imię
                            <input type="text" placeholder="Krzysztof"></input>
                        </label>
                        <label>Wpisz swój email
                            <input type="text" placeholder="abc@xyz.pl"></input>
                        </label>
                    </div>
                    <div className="contact-form_text">
                        <label>Wpisz swoją wiadomość</label>
                            <textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                    </div>
                    <div className="contact-form_button">
                        <Link to="/wyślij"><p>Wyślij</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <h6>Copyright by Coders Lab</h6>
        </div>
    </div>
  );
}

export default Contact;