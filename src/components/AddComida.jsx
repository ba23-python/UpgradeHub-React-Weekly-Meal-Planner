

const AddComida = async (newItem) => {
  try {
    const response = await fetch('https://664c9e9635bbda10988127e7.mockapi.io/comida', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error('Failed to add item');
    }
    // Optionally, you can handle the response data here
    const data = await response.json();
    console.log('Item added successfully:', data);
    // Return the added item or any other data you need
    return data;
  } catch (error) {
    console.error('Error adding item:', error);
    // Handle errors here
    throw error;
  }
};

const AddItem = () => {
  const addComida = async () => {
    try {
    const newItem = {
        "id": "100",
        "nombre": "Ensalada César con Pollo",
        "categoria": "Almuerzo",
        "descripcion": "Lechuga romana con aderezo César, pollo a la parrilla, crotones y queso parmesano.",
        "dia": "Lunes"
};
      await AddComida(newItem);
      // Optionally, you can redirect or perform other actions upon successful addition
    } catch (error) {
      // Handle errors here
      console.error('Error adding item:', error);
    }
  };

  return (
    <button onClick={addComida}>
      Añadir Comida
    </button>
  );
};

export default AddItem;
