


import PropTypes from "prop-types";

function DeleteComida({ id }) {
  const deleteComida = async () => {
    try {
      const response = await fetch(
        `https://664c9e9635bbda10988127e7.mockapi.io/comida/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Handle successful deletion
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error("Error deleting comida:", error);
    }
  };

  return (
    <button onClick={deleteComida}>
      Borra Comida
    </button>
  );
}

DeleteComida.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteComida;
