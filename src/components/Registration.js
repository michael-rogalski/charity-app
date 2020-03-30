import React from 'react';
import './App/App.scss';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import Decoration from '../assets/Decoration.svg';

function Login() {
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
                    <div className="register-form_inside">
                        <div className="register-form_email">
                            <label>Email</label>
                            <input type="text"></input>
                        </div>
                        <div className="register-form_password">
                            <label>Hasło</label>
                            <input type="password"></input>
                        </div>
                        <div className="register-form_repassword">
                            <label>Powtórz hasło</label>
                            <input type="password"></input>
                        </div>
                    </div>
                </div>
                <div className="register-form_buttons">
                    <div className="register-form_button_registration">
                        <Link to="/logowanie"><button>Zaloguj się</button></Link>
                    </div>
                    <div className="register-form_button_login">
                        <Link to="/rejestracja"><button>Załóż konto</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;