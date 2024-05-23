import { useState } from "react"


function Login({ setUser, listUsers }) {
    const [userLogin, setUserLogin] = useState({})
    const handleInput = (ev) => {
        const id = ev.target.id
        setUserLogin({ ...userLogin, [id]: ev.target.value })
    }
    const handleClick = (ev) => {
        ev.preventDefault()
        const findUser = listUsers.find((user) => user.email === userLogin.email && user.password === userLogin.password)
        if (findUser) {
            setUser(findUser)
        }

    }
    return (
        <form onChange={handleInput} >
            <label htmlFor="">Email</label>
            <input type="text" id="email" />
            <label htmlFor="">Password</label>
            <input type="password" id="password" />
            <input type="submit" value="Inicia sesion" onClick={handleClick} />
        </form>
    )
}

export default Login