import React from 'react';
import './menuoverlay.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const MenuOverlay = ({ close, login, book }) => {
    return (
        <div className = 'menuoverlay'>
            <MdOutlineRestaurantMenu className = 'menuoverlay__close' onClick = { close }></MdOutlineRestaurantMenu>
            <ul className = 'menuoverlay__links'>
                <li><a href = '#home' onClick = { close }>Home</a></li>
                <li><a href = '#pages' onClick = { close }>Pages</a></li>
                <li><a href = '#contactus' onClick = { close }>Contact Us</a></li>
                <li><a href = '#blog' onClick = { close }>Blog</a></li>
                <li><a href = '#landing' onClick = { close }>Landing</a></li>
            </ul>
            <ul className = 'menuoverlay__loginbook'>
                <li><a href = '#home' onClick = { close }>Home</a></li>
                <li><a href = '#pages' onClick = { close }>Pages</a></li>
                <li><a href = '#contactus' onClick = { close }>Contact Us</a></li>
                <li><a href = '#blog' onClick = { close }>Blog</a></li>
                <li><a href = '#landing' onClick = { close }>Landing</a></li>
                <li><a href = '#login' onClick = { login }>Log in / Registration</a></li>
                <li><a href = '#book' onClick = { book }>Book Table</a></li>
            </ul>
        </div>
    );
}

export default MenuOverlay;