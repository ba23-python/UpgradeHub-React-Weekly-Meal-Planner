const getDataApi = () => {
    return fetch('https://664c9e9635bbda10988127e7.mockapi.io/comida')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((item) => {
          return {
            id: item.id,
            name: item.name,
            category: item.category,
            description: item.description,
          };
        });
        return cleanData;
      });
  };
  
  export default getDataApi;
