import './CSS/App.css';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Profile";
import axios from "axios";
import items from "./Data";
import Menu from "./Menu";
import Days from "./Days";
import DeleteComida from "./DeleteComida";
import AddComida from './AddComida';


const allDays = ["Platos", ...new Set(items.map((item) => item.dia))];

function App() {
  const [user, setUser] = useState(null);
  const [listUsers, setListUsers] = useState([]);
  const [days, setDays] = useState(allDays);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (dia) => {
    if (dia === "Platos") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.dia === dia);
    setMenuItems(newItems);
  };

  useEffect(() => {
    axios
      .get("https://664c9e9635bbda10988127e7.mockapi.io/users")
      .then((response) => {
        setListUsers(response.data);
      });
  }, []);

  // Fetch current location
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<h2>Lista de Menu Semanal</h2>} />
        <Route
          path="/login"
          element={<Login listUsers={listUsers} setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={<AuthRoute user={user} component={<Profile />} />}
        />
      </Routes>

      {location.pathname !== '/login' && (
        <>
          <Days days={days} filterItems={filterItems} />
          <DeleteComida id="1" />
          <AddComida />
          <Menu items={menuItems} />
           
        </>
      )}
    </div>
  );
}

export default App;
