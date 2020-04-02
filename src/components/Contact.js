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
        isNameValid: true,
        isEmailValid: true,
        isTextareaValid: true,
        isFormClicked: false,
        response: ""
    };

    onClickSubmit = e => {
        e.preventDefault();
        if (!this.isFormValid()) {
            return false;
        }

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify({
                name: this.state.theName,
                email: this.state.email,
                message: this.state.textarea
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then((data) => {
                console.log("Success:", data);
                this.setState({ isFormClicked: true });
            })
            .catch((error) => {
                if (error.status === 'error') {
                    return false;
                };
                console.error("Error:", error);
            });
    };

    onNameInputChange = e => {
        this.setState({
            theName: e.target.value
        })
    };

    onEmailInputChange = e => {
        this.setState({
            email: e.target.value
        })
    };

    onTextareaChange = e => {
        this.setState({
            textarea: e.target.value
        })
    };

    isFormValid = () => {
        const { theName, email, textarea } = this.state;

        const isNameValid = theName.length >= 2 && !theName.includes(" ");
        const isEmailValid = email.includes("@") && email.length >= 3;
        const isTextareaValid = textarea.length >= 120;

        this.setState({ isNameValid, isTextareaValid, isEmailValid });
        return isNameValid && isTextareaValid && isEmailValid
    };

    render() {
        const { theName, email, textarea } = this.state;
        return (
            <div className="contact_component">
                <div className="contact_info_section">
                    <div className="contact_picture">
                        <img src={BackgroundContactForm} alt="BackgroundContactForm" />
                    </div>
                    <form className="contact_info_section_inside">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={Decoration} alt="Decoration" />
                        {this.state.isFormClicked &&
                            <div className = "contact-success_message">
                                <h5>Wiadomość została wysłana! <br/>Wkrótce się skontaktujemy.</h5>
                            </div>}
                        <div className="contact-form">
                            <div className="contact-form_name_and_email">
                                <label>Wpisz swoje imię
                                    <input
                                        type="text"
                                        name="name"
                                        value={theName}
                                        placeholder="Krzysztof"
                                        onChange={this.onNameInputChange}
                                    />
                                    <p className="error">{!this.state.isNameValid && <span>Podane imię jest nieprawidłowe!</span>}</p>
                                </label>
                                <label>Wpisz swój email
                                    <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        placeholder="abc@xyz.pl"
                                        onChange={this.onEmailInputChange}
                                    />
                                    <p className="error">{!this.state.isEmailValid && <span>Podany email jest nieprawidłowy!</span>}</p>
                                </label>
                            </div>
                            <div className="contact-form_text">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea
                                    type="text"
                                    name="textarea"
                                    value={textarea}
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    onChange={this.onTextareaChange}
                                />
                                <p className="error">{!this.state.isTextareaValid && <span>Wiadomość musi mieć conajmniej 120 znaków!</span>}</p>
                            </div>
                            <div className="contact-form_button">
                                <button type="submit" onClick={this.onClickSubmit}>Wyślij</button>
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