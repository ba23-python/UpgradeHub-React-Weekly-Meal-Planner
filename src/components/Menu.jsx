const Menu = ({ items }) => {
    return (
      <div>
        {items.map((menuItem) => {
          const { id, nombre, descripcion } = menuItem;
          return (
            <article key={id}>
              <div>
                <header>
                  <h4>{nombre}</h4>
                </header>
                <p>{descripcion}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  
  export default Menu;