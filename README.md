# Practicing React

Este repo se ha construido para que vayáis cogiendo rienda suelta con React. Para poder empezar seguid los pasos que se encuentran en el readme :)

## Requisitos Previos

Para ejecutar este proyecto en tu máquina local, necesitarás tener instalado lo siguiente:

- Node.js
- pnpm
- Git

Asegúrate de tener configuradas tus credenciales SSH para interactuar con el repositorio via SSH.

## Configuración del entorno de desarrollo

Sigue los siguientes pasos para configurar tu entorno de desarrollo:

### 1. Inicializa un proyecto con Vite.

Aquí tenéis la url de <a href="https://vitejs.dev/">Vite</a> para que empeceis a buscar informacion acerca de como se puede inicializar un proyecto en el. A ser posible usad la opción de Typescript + SWC. Seguid los pasos que pone en la consola.

### 2. Genera un archivo .env 

En este fichero deberá existir una variable que sea ENDPOINT_URL que tendrá como valor la URL de un endpoint al que le podais hacer peticiones HTTP.

### 3. Modificad App.tsx 

En app unicamente debe haber un botón que tenga por titulo "Saludar", este botón deberá mostrar una alerta que diga "Hola" cada vez que se haga click en este botón.

### 4. Cread un componente reutilizable llamado Greetings.

Cread este componente de manera que se pueda reutilizar en la toda la app, es decir, el titulo del botón cuando se importe en algún componente, deberá mostrar lo que se necesite en esa parte de la APP y el texto que se muestra en la alerta también deberá ser dinámico.

### 5. Estilead el botón. 

Una vez creado este componente, deberéis darle estilos con CSS. Este botón deberá tener este color de fondo #3289a8 y este color de letras #fafcfc. 

### 6. Manejo de estados.

Necesito que este botón tenga un control para saber si se ha lanzado la alerta o no. Cread la lógica necesaria para que cuando el usuario haga click en el botón, este cambie su color de letra y de fondo.

### 7. Manejo de peticiones HTTP.

Una vez comprendidos las bases y lógica para hacer estos ejercicios necesito lo siguiente. Este botón ya no tendrá que mostrar una alerta, si no que deberá hacer una peticion HTTP al endpoint que hayáis establecido en la variable del fichero .ENV y mostrad por consola los datos extraidos de ese endpoint. PD: Revisad como se pueden usar variables con React y Vite ;)

### 8. Almacenad los datos en un estado y mostrad esos datos en la app. No tiene que tener ningun tipo de estilos, unicamente mostradme los datos en el HTML.

### 9. Estilear estos datos.

Mirad como instalar <a href="https://mui.com/material-ui/getting-started/">MUI</a> en este enlace. No quiero nada del otro mundo, mirad si podeis usar algun componente que os permita crear de manera visual una card con los datos que vosotros decidais mostrar.
