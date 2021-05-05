// para validar los datos que vamos ingresando que tenga el mismo esquema.
const mongoose = require('mongoose');
// Importar metodo Schema que permite definir como va a lucir el esquema. 
const Schema = mongoose.Schema;

// Para usar el Schema toca almacenarlo en alguna variable

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

// Pasar a model, permite tomar el schema y luego se puede utilizar para guardarlo en una colección
module.exports = mongoose.model('Tasks', TaskSchema);

