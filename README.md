# Proyecto React en equipo
## Planer Menu Comida semanal para 7 dias/ 3 comidas por dia
### Miembros del equipo: Bilyana Ancheva y Beatriz Vazquez Amat

Este proyecto se esta realizando en equipo por 2 Junior Full Stack Developers, alumnas en Upgarde Hub.
Vamos a realizar una aplicación web que nos permita hacer una planificación de un menú semanal. 
En la página web podemos introducir los datos de 3 comidas por día para una semana entera.

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
   useContext, 
   useEffect, 
   useState, 
   asi como rutas privada / auth -clase 7


.gitignore para node_modules

### Comandos para ejecutar:
#### npm install /** para node_modules
#### npm run dev /\***para el localhost
#### instalar Extension de Chrome para Componentes React

### Componentes en este proyecto:
Formulario de login para usuarios registrados/registro para nuevos usuarios
Ruta privada en la que se va a ver el menu
Componentes App, Menu, Login, Days, Data entre otros
API creada en mockapi https://664c9e9635bbda10988127e7.mockapi.io/comida
Rutas para CRUD:
GET, POST, DELETE: GET https://664c9e9635bbda10988127e7.mockapi.io/comida

GET https://664c9e9635bbda10988127e7.mockapi.io/comida/:id

POST https://664c9e9635bbda10988127e7.mockapi.io/comida

POST https://664c9e9635bbda10988127e7.mockapi.io/comida

PUT https://664c9e9635bbda10988127e7.mockapi.io/comida/:id

DELETE https://664c9e9635bbda10988127e7.mockapi.io/comida/:id

### Fase de organizar y systematizar los pasos en el proyecto

Se ha compratido la repo entre el equipo y se ha utiizado el Project Board de GitHub para las tareas:

![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/Project%20Kanban%20Board.PNG))

### Imagenes de renderización y testeo:

![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-all.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-lunes.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-martes.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Weekly-Meal-Planner-miercoles.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-invalid%20credentials.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-Create%20New%20User-in%20MockApi.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-Postman-GetUsers-ok.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-RecourceData-Mockapi-comida.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-SavePassword.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-anadir-borrar-Comida-UI.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-borrar-Comida-id-1.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-mockapi-users.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-newuser-added-Method-POST-Postman.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-ruta-Menu.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/image-ruta-login.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Comidas%20Anadidas-Mockapi.PNG)
![image](https://github.com/ba23-python/UpgradeHub-React-Weekly-Meal-Planner/blob/main/src/assets/imagen-Consola-Objeto-anadido.PNG)

