import { Navigate } from "react-router-dom";

function AuthRoute({ user, component }) {
  return user ? component : <Navigate to="/login" />;
}

export default AuthRoute;
