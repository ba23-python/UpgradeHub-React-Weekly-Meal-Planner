import { Navigate } from "react-router-dom"


function AuthRoute({ user, component }) {
    //user --> null cunado NO  haga login, y un valor  cuando haya hecho login
    //user === null
    if (!user)
        return <Navigate to="/login" />

    if (user)
        return component
}

export default AuthRoute