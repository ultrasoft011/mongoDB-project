// Requerir express pero no se va a crear un servidor
const express = require('express');

// Con expresion podemos obtener el metodo Router que devuelve un objeto y lo guardamos en una variable
const router = express.Router();

// Requiero el modulo models/task para poder darle el esquema a los datos que se envian
const Task = require('../models/tasks');

// Mostrar algo en pantalla
    router.get('/', async (req, res) => {
        // Traer los datos desde la base de datos con find()
        const tasks = await Task.find();
        res.render('index', {
            tasks
        });
    });

// Para enviar los datos
    router.post('/add', async (req, res) => {
        // async y await para ejecutar eventos asyncronos sin usar promesas o callbacks
        const tasks = (new Task(req.body));
        // Para almacenar dentro de la base datos
        await tasks.save(); // 
        res.send('received')
    })

// Luego se exporta // Aunque deberia primero definirse antes de exportarlo como no hay rutas no lo vamos a definir
module.exports = router;