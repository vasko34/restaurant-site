import React from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LoginOverlay, BookOverlay, MenuOverlay } from '../index.js';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [toggleLogin, setToggleLogin] = React.useState(false);
    const [toggleBook, setToggleBook] = React.useState(false);

    const openMenu = () => {
        setToggleBook(false);
        setToggleLogin(false);
        setToggleMenu(true);
    }

    const closeMenu = () => {
        setToggleMenu(false);
    }

    const openLogin = () => {
        setToggleMenu(false);
        setToggleBook(false);
        setToggleLogin(true);
    }

    const closeLogin = () => {
        setToggleLogin(false);
    }

    const openBook = () => {
        setToggleMenu(false);
        setToggleLogin(false);
        setToggleBook(true);
    }

    const closeBook = () => {
        setToggleBook(false);
    }

    return (
        <nav className = 'navbar'>
            <div className = 'navbar__heading'>
                <h1>Gerícht</h1>
            </div>
            <ul className = 'navbar__links'>
                <li><a href = '#home'>Home</a></li>
                <li><a href = '#pages'>Pages</a></li>
                <li><a href = '#contactus'>Contact Us</a></li>
                <li><a href = '#blog'>Blog</a></li>
                <li><a href = '#landing'>Landing</a></li>
            </ul>
            <div className = 'navbar__loginbook'>
                <a href = '#login' onClick = { openLogin }>Log in / Registration</a>
                <div className = 'navbar__loginbook-line'></div>
                <a href = '#book' onClick = { openBook }>Book Table</a>
            </div>
            <div className = 'navbar__menu'>
                <div className = 'navbar__menu-loginbook'>
                    <a href = '#login' onClick = { openLogin }>Log in / Registration</a>
                    <div className = 'navbar__loginbook-line'></div>
                    <a href = '#book' onClick = { openBook }>Book Table</a>
                </div>
                <GiHamburgerMenu color = '#fff' fontSize = { 27 } onClick = { openMenu }></GiHamburgerMenu>
                { toggleMenu && (<MenuOverlay close = { closeMenu } login = { openLogin } book = { openBook }></MenuOverlay>) }            
            </div>
            { toggleLogin && (<LoginOverlay close = { closeLogin }></LoginOverlay>) }
            { toggleBook && (<BookOverlay close = { closeBook }></BookOverlay>) } 
        </nav>
    );
}

export default Navbar;