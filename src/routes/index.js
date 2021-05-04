// Requerir express pero no se va a crear un servidor
const express = require('express');

// Con expresion podemos obtener el metodo Router que devuelve un objeto y lo guardamos en una variable
const router = express.Router();

// Luego se exporta // Aunque deberia primero definirse antes de exportarlo como no hay rutas no lo vamos a definir
module.exports = router;