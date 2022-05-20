import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div class="navegador" >
            <li >INICIO</li>
            <li >ABRIGOS</li>
            <li >REMERAS</li>
            <li >PANTALONES</li>
            <CartWidget ></CartWidget>
        </div>
    )
}

export default NavBar