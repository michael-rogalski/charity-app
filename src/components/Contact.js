import React, { Component } from 'react';
import './App/App.scss';
import Decoration from '../assets/Decoration.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import BackgroundContactForm from '../assets/Background-Contact-Form.jpg';
// import { useEffect } from 'react';


class Contact extends Component {
state = {
    email: "",
    theName: "",
    textarea: "",
    isFormClicked:false,
    isNameValid: true,
    isEmailValid: true,
    isTextareaValid: true,
    response: ""
};


onClickSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
        return false;
    }
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: this.state.theName,
            email: this.state.email,
            message: this.state.textarea
        })
    })
        .then(response => response.json())
        .then(resp => {
            if (resp.status === 'error') {
                return false;
            }
            this.setState({ isFormClicked: true });
        });
};

onInputChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
};

onNameInputChange = e => {
    this.setState({
        theName: e.target.value
    })
};

isFormValid = () => {
    const { theName, email, textarea } = this.state;
    const isNameValid = theName.length >= 2 && !theName.includes(" ");
    const isEmailValid = email.includes("@") && email.length >= 3;
    const isTextareaValid = textarea.length >= 5;
    this.setState({isNameValid, isTextareaValid, isEmailValid});
    return isNameValid && isTextareaValid && isEmailValid
};
    
render() {
    const {theName, email, textarea } = this.state;
    return (
        <div className="contact_component">
            <div className="contact_info_section">
                <div className="contact_picture">
                    <img src={BackgroundContactForm} alt="BackgroundContactForm" />
                </div>
                <form className="contact_info_section_inside" onSubmit={this.onClickSubmit}>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={Decoration} alt="Decoration" />
                    <div className="contact-form">
                        <div className="contact-form_name_and_email">
                            <label>Wpisz swoje imię
                            <input
                                    type="text"
                                    name="name"
                                    placeholder="Krzysztof"
                                    onChange={this.onNameInputChange}
                                />
                            </label>
                            <p className="error">{!this.state.isNameValid && <span>Pole imię musi zawierać co najmniej 2 znaki i być jednym wyrazem</span>}</p>
                            <label>Wpisz swój email
                            <input
                                    type="text"
                                    name="email"
                                    placeholder="abc@xyz.pl"
                                    onChange={this.onInputChange}
                                />
                            </label>
                            <p className="error">{!this.state.isEmailValid && <span>E-mail musi zawierac znak "@" </span>}</p>
                        </div>
                        <div className="contact-form_text">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                onChange={this.onInputChange}
                            />
                            <p className="error">{!this.state.isTextareaValid && <span>Pole wiadomość musi mieć conajmniej 120 znaków</span>}</p>
                        </div>
                        <div className="contact-form_button">
                            <button type="submit">Wyślij</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="copyright">
                <h6>Copyright by Coders Lab</h6>
                <div className="social-media_icons">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" />
                </div>
            </div>
        </div>
    );
}
}

export default Contact;