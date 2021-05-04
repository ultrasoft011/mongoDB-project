// Requerir Path para manejo de directorios en cualquier sistema operativo
const path = require('path');
// Requerir express, llamarlo.
const express = require('express');

// Poder mostrar los datos por consola middleware con morgan

const morgan = require('morgan');
// Para inicializar express
const app = express();



// Importando las notas
// Requiero desde la carpeta routes importante el ./ el archivo index
// se le da un nombre al enrutador que estamos importando
const indexRoutes = require('./routes/index');

// Setting para configurar el servidor, port (variable) y el valor el resto
app.set('port', process.env.PORT || 3000);
// Decirle al servidor que la cartpeta views esta presente en src
app.set('views', path.join(__dirname, 'views'));
// Configurando un motor de vista
app.set('view engine', 'ejs');

// middlewares; funcion que se ejecuta antes de que lleguen a las rutas, procesar datos antes de que lleguen
app.use(morgan('dev'));
// modulo urlencoded, metodo para entender los datos que envian los usuario - formulario de html al servidor - formato JSON es el preferible
// extended false por que solo esta enviando texto no esta enviando imagenes ni archivos grandes.
app.use(express.urlencoded({extended:false}))

//Routes
// Vamos a utilizar el enrutador
app.use('/', indexRoutes);




// Que escuche el puerto 3000 y envie un mensaje
// y para tomar se usar get para reutilizar la variable 'port'
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});