Proyecto React
Planear Menu Comida semanal para 7 dias/ 3 comidas por dia

![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-all.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-lunes.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-martes.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-miercoles.PNG)
Proyecto React En este proyecto vamos a realizar una aplicación web que nos permita hacer una planificación de un menú semanal. En la página web podemos introducir los datos de 3 comidas por día para una semana entera.

Objetivos

1. Al cargar la página se muestra un formulario de login, o la opción de registrarte si es tu primera vez.
2. NO se puede ver los menús si no estás logado.
3. Una vez logado podrás ver lo siguiente:
   o Menú semanal con un listado de comidas por día
   i. Cada menú tiene asociado 7 días
   ii. Un día puede tener asociado hasta 3 comidas
   iii. Cada comida tiene un nombre, descripción y tipo
   o Agregar un nuevo menú
   o Agregar una comida a un día especifico
4. Guardar los datos del menú y sus comidas usando la web https://mockapi.io/
5. Filtrar las comidas por día.
6. Eliminar una comida con splice
7. Es importante deben hacer uso de
   useContext, /clase 5
   useEffect, /clase 3
   useState, clase 2
   asi como rutas privada / auth -clase 7
8. Podrian usar la API de node que tengan ya programada o mockapi.io

.gitignore para node_modules
npm install /** para node_modules
npm run dev /\***para el localhost
instalar Extension de Chrome para Componentes React

Componentes en este proyecto:
Formulario de login para usuarios registrados/registro para nuevos usuarios
Ruta privada en la que se va a ver el menu
API creada en mockapi https://664c9e9635bbda10988127e7.mockapi.io/comida
Rutas GET, POST, DELETE: GET https://664c9e9635bbda10988127e7.mockapi.io/comida

GET https://664c9e9635bbda10988127e7.mockapi.io/comida/:id

POST https://664c9e9635bbda10988127e7.mockapi.io/comida

POST https://664c9e9635bbda10988127e7.mockapi.io/comida

PUT https://664c9e9635bbda10988127e7.mockapi.io/comida/:id

DELETE https://664c9e9635bbda10988127e7.mockapi.io/comida/:id
