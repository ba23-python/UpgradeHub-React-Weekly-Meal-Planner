import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Profile from "./Profile";
import axios from "axios";


function App() {
  const [user, setUser] = useState(null);
  const [listUsers, setListUsers] = useState([]);
  const [meal, setMeal] = useState([]);
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://664c9e9635bbda10988127e7.mockapi.io/comida');
        const cleanData = response.data.map(item => ({
          id: item.id,
          nombre: item.nombre,
          categoria: item.categoria,
          descripcion: item.descripcion
        }));
        setMeal(cleanData);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []);

   useEffect(() => {
  const postData = async () => {
    const newMeal = {
      id: "{newMeal.length}", // Ensure this ID is unique if you need to specify it
      nombre: "",
      categoria: "",
      descripcion: ""
    };

    try {
      const response = await axios.post('https://664c9e9635bbda10988127e7.mockapi.io/comida', newMeal);
      console.log('POST response:', response.data);
      
      // Optionally update the state with the new meal
      setMeal(prevMeal => [...prevMeal, response.data]);
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };

  postData();
}, []); // Empty dependency array to run this effect only once on mount

  const handleClick=() => {
    postData(); 
  }
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route
          path="/login"
          element={<Login listUsers={listUsers} setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={<AuthRoute user={user} component={<Profile />} />}
        />
      </Routes>
      <div>
       <div>
      <h1>Lista de Comidas</h1>
      <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      <button onClick={handleClick}>Add New Meal</button>
      <ul>
        {meal.map(meal => (
          <li key={meal.id}>
            <h3>{meal.nombre}</h3>
            <p><strong>Categoría:</strong> {meal.categoria}</p>
            <p>{meal.descripcion}</p>
          </li>
        ))}
      </ul>
      

    </div>
    
    </div>
    </div>
  );
}

export default App;
