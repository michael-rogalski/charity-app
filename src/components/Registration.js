import React, { Component } from 'react';
import './App/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Decoration from '../assets/Decoration.svg';

class Registration extends Component {

    state = {
        email: "",
        password: "",
        prepassword: "",
        isEmailValid: true,
        isPasswordValid: true,
        isPrePasswordValid: true,
        response: ""
    };

    onClickSubmit = e => {
        e.preventDefault();
        if (!this.isLoginValid()) {
            return false;
        }

        console.log([this.state.email, this.state.password]);

        fetch("https://fer-api.coderslab.pl/v1/portfolio/login", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                prepassword: this.state.prepassword
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                if (error.status === 'error') {
                    return false;
                };
                console.error("Error:", error);
            });
    };

    onEmailInputChange = e => {
        this.setState({
            email: e.target.value
        })
    };

    onPasswordInputChange = e => {
        this.setState({
            password: e.target.value
        })
    };

    onPrePasswordInputChange = e => {
        this.setState({
            prepassword: e.target.value
        })
    };

    isLoginValid = () => {
        const { email, password, prepassword } = this.state;
        const isEmailValid = email.includes("@") && email.length >= 3;
        const isPasswordValid = password.length >= 5;
        const isPrePasswordValid = prepassword === password;

        this.setState({ isEmailValid, isPasswordValid, isPrePasswordValid });
        return isEmailValid && isPasswordValid && isPrePasswordValid
    };

    render() {

        const {email, password, prepassword} = this.state;

        return (
            <div className="home-header">
                <div className="login">
                    <ul>
                        <Link to="/logowanie"><button>Zaloguj</button></Link>
                        <Link to="/rejestracja"><button>Załóż konto</button></Link>
                    </ul>
                </div>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>
                                Start
                    </li>
                        </Link>
                        <Link to="/">
                            <li>
                                O co chodzi?
                    </li>
                        </Link>
                        <Link to="/">
                            <li>
                                O nas
                    </li>
                        </Link>
                        <Link to="/">
                            <li>
                                Fundacja i organizacje
                    </li>
                        </Link>
                        <Link to="/">
                            <li>
                                Kontakt
                    </li>
                        </Link>
                    </ul>
                </nav>
                <div className="register-component">
                    <h1>Załóż konto</h1>
                    <img src={Decoration} alt="Decoration" />
                    <div className="register-form_component">
                        <form className="register-form_inside">
                            <div className="register-form_email">
                                <label>Email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.onEmailInputChange}
                                />
                                <p className="error">{!this.state.isEmailValid && <span>Podany email jest nieprawidłowy!</span>}</p>
                            </div>
                            <div className="register-form_password">
                                <label>Hasło</label>
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.onPasswordInputChange}
                                />
                                <p className="error">{!this.state.isPasswordValid && <span>Podane hasło jest za krótkie!</span>}</p>
                            </div>
                            <div className="register-form_repassword">
                                <label>Powtórz hasło</label>
                                <input
                                    type="password"
                                    name="prepassword"
                                    value={prepassword}
                                    onChange={this.onPrePasswordInputChange}
                                />
                                <p className="error">{!this.state.isPrePasswordValid && <span>Podane hasło nie jest takie samo!</span>}</p>
                            </div>
                        </form>
                    </div>
                    <div className="register-form_buttons">
                        <div className="register-form_button_registration">
                            <Link to="/logowanie"><button>Zaloguj się</button></Link>
                        </div>
                        <div className="register-form_button_login">
                            <button type="submit" onClick={this.onClickSubmit}>Załóż konto</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;