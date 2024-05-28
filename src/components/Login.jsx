import { useState, useEffect } from "react";
import axios from "axios";
import './CSS/Login.css';

function Login({ setUser }) {
    const [userLogin, setUserLogin] = useState({ email: '', password: '' });
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        // Fetch the list of users from the mock API
        axios.get("https://664c9e9635bbda10988127e7.mockapi.io/users")
            .then((response) => {
                setListUsers(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    const handleInput = (ev) => {
        const id = ev.target.id;
        setUserLogin({ ...userLogin, [id]: ev.target.value });
    };

    const handleClick = (ev) => {
        ev.preventDefault();
        const findUser = listUsers.find((user) => user.email === userLogin.email && user.password === userLogin.password);
        if (findUser) {
            setUser(findUser);
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleInput} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleInput} />
            <button type="submit" onClick={handleClick}>Inicia sesión</button>
        </form>
    );
}

export default Login;