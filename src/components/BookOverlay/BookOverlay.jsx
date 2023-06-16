import React from 'react';
import './bookoverlay.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const BookOverlay = ({ close }) => {
    const [currentInputFirstName, setCurrentInputFirstName] = React.useState('');
    const [currentInputLastName, setCurrentInputLastName] = React.useState('');
    const [currentInputPhone, setCurrentInputPhone] = React.useState('');

    const bookTable = (firstName, lastName, phone) => {
        const person = {
            firstName: firstName,
            lastName: lastName,
            phone: phone
        };

        fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(person)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    return (
        <div className = 'bookoverlay'>
            <h2>Book table</h2>
            <input placeholder = 'Enter First Name' value = { currentInputFirstName } onChange = { (e) => setCurrentInputFirstName(e.target.value) }></input>
            <input placeholder = 'Enter Last Name' value = { currentInputLastName } onChange = { (e) => setCurrentInputLastName(e.target.value) }></input>
            <input placeholder = 'Enter Phone Number' type = 'tel' value = { currentInputPhone } onChange = { (e) => setCurrentInputPhone(e.target.value) }></input>
            <button type = 'button' onClick = { () => bookTable(currentInputFirstName, currentInputLastName, currentInputPhone) }>Book</button>
            <MdOutlineRestaurantMenu fontSize = { 27 } color = '#DCCA87' onClick = { close } className = 'bookoverlay__close'></MdOutlineRestaurantMenu>
        </div>
    );
}

export default BookOverlay;