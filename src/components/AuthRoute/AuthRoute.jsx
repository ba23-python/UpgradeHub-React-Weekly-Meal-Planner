import { Navigate } from "react-router-dom"


function AuthRoute({ user, component }) {

    if (user === null) {
        return <Navigate to="/login" />
    } else if (user) { 
        
        return;
    
    }
}

export default AuthRoute