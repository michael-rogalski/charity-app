import React, { Component } from 'react';
import './App/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Decoration from '../assets/Decoration.svg';

class Login extends Component {

    state = {
        email: "",
        password: "",
        isEmailValid: true,
        isPasswordValid: true,
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
                password: this.state.password
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

    isLoginValid = () => {
        const { email, password } = this.state;

        const isEmailValid = email.includes("@") && email.length >= 3;
        const isPasswordValid = password.length >= 6;

        this.setState({ isEmailValid, isPasswordValid });
        return isEmailValid && isPasswordValid
    };

    render() {

        const {email, password} = this.state;

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
                <div className="login-component">
                    <h1>Zaloguj się</h1>
                    <img src={Decoration} alt="Decoration" />
                    <div className="login-form_component">
                        <form className="login-form_inside">
                            <div className="login-form_email">
                                <label>Email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.onEmailInputChange}
                                />
                                <p className="error">{!this.state.isEmailValid && <span>Podany email jest nieprawidłowy!</span>}</p>
                            </div>
                            <div className="login-form_password">
                                <label>Hasło</label>
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.onPasswordInputChange}
                                />
                                <p className="error">{!this.state.isPasswordValid && <span>Podane hasło jest za krótkie!</span>}</p>
                            </div>
                        </form>
                    </div>
                    <div className="login-form_buttons">
                        <div className="login-form_button_registration">
                            <Link to="/rejestracja"><button>Załóż konto</button></Link>
                        </div>
                        <div className="login-form_button_login">
                            <button type="submit" onClick={this.onClickSubmit}>Zaloguj się</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;