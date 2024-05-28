import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook if not already imported
import './CSS//NavBar.css';

function NavBar({ user }) {
    const isLoggedIn = user !== null;

    return (
        <header>
            <ul>
                {isLoggedIn && <li><Link to="/menu">Menu</Link></li>}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Perfil de usuario</Link></li>
            </ul>
        </header>
    );
}

export default NavBar;