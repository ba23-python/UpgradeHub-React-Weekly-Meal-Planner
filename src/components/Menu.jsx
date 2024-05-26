const Menu = ({ items }) => {
    return (
      <div>
        {items.map((menuItem) => {
          const { id, nombre, categoria, descripcion } = menuItem;
          return (
            <article key={id}>
              <div>
                <p>{categoria}</p>
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