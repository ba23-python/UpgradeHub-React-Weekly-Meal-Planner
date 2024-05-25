import { useEffect, useRef } from "react"

const INITIAL_STATE = { name: "", email: "" }

function Form({ setMessage, changeUser, setUser, user }) {

    const inputRefEmail = useRef();
    const inputRefName = useRef();

    useEffect(() => {
        inputRefEmail.current.focus()
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault()
        setMessage("Enviado con exito")
    }
    const handleReset = (event) => {
        event.preventDefault()
        setMessage("")
        setUser(INITIAL_STATE)
    }
    const handleInput = (event) => {
        const info = {
            key: event.target.id,
            value: event.target.value
        }
        changeUser(info)
    }
    const handleFocus = (inputRef) => {
        inputRef.current.classList.add("focus")
    }
    const handleBlur = (inputRef) => {
        inputRef.current.classList.remove("focus")
    }

    return (
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput} value={user.email}
                    onFocus={() => handleFocus(inputRefEmail)}
                    onBlur={() => handleBlur(inputRefEmail)}
                    ref={inputRefEmail} />
            </div>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" onChange={handleInput} value={user.name}
                    onFocus={() => handleFocus(inputRefName)}
                    onBlur={() => handleBlur(inputRefName)}
                    ref={inputRefName} />
            </div>
            <button onClick={handleSubmit}>Enviar</button>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}

export default Form