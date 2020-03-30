import React from 'react';
import './App/App.scss';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import Decoration from '../assets/Decoration.svg';

function Logout() {
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
            <div className="logout-component">
                <h1>Wylogowanie nastąpiło<br/>pomyślnie!</h1>
                <img src={Decoration} alt="Decoration" />
                <div className="logout-form_buttons">
                    <Link to="/"><button>Strona główna</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Logout;