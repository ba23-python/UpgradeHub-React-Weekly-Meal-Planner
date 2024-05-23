import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import NavBar from "./NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Profile";



function App() {

  const [user, setUser] = useState(null)
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    axios.get("https://664865f02bb946cf2fa069a8.mockapi.io/user")
      .then(response => {
        setListUsers(response.data)
      })
  }, [])


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<Login listUsers={listUsers} setUser={setUser} />} />
        <Route path="/profile" element={
          <AuthRoute user={user} component={<Profile />} />} />
      </Routes>


    </div>
  );
}

export default App;
