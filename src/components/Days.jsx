const Days = ({ days, filterItems }) => {
    return (
      <div >
        {days.map((days, i) => {
          return (
            <button
              type="button"
              key={i}
              onClick={() => filterItems(days)}
            >
              {days}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default Days;