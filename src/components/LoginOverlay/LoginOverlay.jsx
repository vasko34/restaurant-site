import React from 'react';
import './loginoverlay.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const LoginOverlay = ({ close }) => {
    const [toggleRegPasswordMatchError, setToggleRegPasswordMatchError] = React.useState(false);
    const [toggleRegPasswordSafetyError, setToggleRegPasswordSafetyError] = React.useState(false);
    const [toggleLogPasswordSafetyError, setToggleLogPasswordSafetyError] = React.useState(false);
    const [currentInputLogUsername, setCurrentInputLogUsername] = React.useState('');
    const [currentInputLogPassword, setCurrentInputLogPassword] = React.useState('');
    const [currentInputRegUsername, setCurrentInputRegUsername] = React.useState('');
    const [currentInputRegPassword, setCurrentInputRegPassword] = React.useState('');
    const [currentInputRegConfirmPassword, setCurrentInputRegConfirmPassword] = React.useState('');

    const login = (username, password) => {
        if ((password.length < 8) || (password.search(/\d+/) === -1) || (password.search(/[A-Z]/) === -1) || (password.search(/[a-z]/) === -1)) {
            setToggleLogPasswordSafetyError(true);
        } else {
            setToggleLogPasswordSafetyError(false);
        }

        const user = {
            username: username,
            password: password
        };

        if (toggleLogPasswordSafetyError === false) {
            fetch('/api/loguser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        }
    }

    const register = (username, password, confirmPassword) => {
        if (password !== confirmPassword) {
            setToggleRegPasswordMatchError(true);
        } else {
            setToggleRegPasswordMatchError(false);
        }

        if ((password.length < 8) || (password.search(/\d+/) === -1) || (password.search(/[A-Z]/) === -1) || (password.search(/[a-z]/) === -1)) {
            setToggleRegPasswordSafetyError(true);
        } else {
            setToggleRegPasswordSafetyError(false);
        }

        const user = {
            username: username,
            password: password
        };

        if ((toggleRegPasswordSafetyError === false) && (toggleRegPasswordMatchError === false)) {
            fetch('/api/reguser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        }
    }

    return (
        <div className = 'loginoverlay'>
            <div className = 'loginoverlay__login'>
                <h2>Log in</h2>
                <input placeholder = 'Enter username' value = {currentInputLogUsername} onChange = { (e) => setCurrentInputLogUsername(e.target.value) }></input>
                <input placeholder = 'Enter password' type = 'password' value = {currentInputLogPassword} onChange = { (e) => setCurrentInputLogPassword(e.target.value) }></input>
                { toggleLogPasswordSafetyError && (<p>Invalid username or password!</p>) }
                <button type = 'button' onClick = { () => login(currentInputLogUsername, currentInputLogPassword) }>Log in</button>
            </div>
            <div className = 'loginoverlay__linevertical'></div>
            <div className = 'loginoverlay__linehorizontal'></div>
            <div className = 'loginoverlay__register'>
                <h2>Register</h2>
                <input placeholder = 'Enter username' value = {currentInputRegUsername} onChange = { (e) => setCurrentInputRegUsername(e.target.value) }></input>
                <input placeholder = 'Enter password' type = 'password' value = {currentInputRegPassword} onChange = { (e) => setCurrentInputRegPassword(e.target.value) }></input>
                <input placeholder = 'Confirm password' type = 'password' value = {currentInputRegConfirmPassword} onChange = { (e) => setCurrentInputRegConfirmPassword(e.target.value) }></input>
                { toggleRegPasswordMatchError && (<p>Passwords don't match!</p>) }
                { toggleRegPasswordSafetyError && (<p>The password must be atleast 8 characters long and contain numbers, capital and lowercase letters!</p>) }                    
                <button type = 'button' onClick = { () => register(currentInputRegUsername, currentInputRegPassword, currentInputRegConfirmPassword) }>Register</button>
            </div>
            <MdOutlineRestaurantMenu fontSize = { 27 } color = '#DCCA87' onClick = { close } className = 'loginoverlay__close'></MdOutlineRestaurantMenu>
        </div>
    );
}

export default LoginOverlay;