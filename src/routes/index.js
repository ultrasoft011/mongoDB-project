// Requerir express pero no se va a crear un servidor
const express = require('express');

// Con expresion podemos obtener el metodo Router que devuelve un objeto y lo guardamos en una variable
const router = express.Router();

// Requiero el modulo models/task para poder darle el esquema a los datos que se envian
const Task = requiere('../models/task');

// Mostrar algo en pantalla
router.get('/', (req, res) => {
    res.render('index');
})

// Para programar "add y que funcione en el navegador para enviar datos"

router.post('/add', (req, res) => {
    console.log(req.body); // Para ver si recibimos el datos
    res.send('received'); // Responder 
})


// Luego se exporta // Aunque deberia primero definirse antes de exportarlo como no hay rutas no lo vamos a definir
module.exports = router;