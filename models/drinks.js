const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredienteSchema = new Schema({
    nombre: String,
    cantidad: String
})

const marcasSchema = new Schema({
    nombre: String
})

const DrinkSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    ingredientes: [ingredienteSchema],
    situacion: {
        type: String,
        required: false
    },
    recomendacion: {
        type: String,
        required: false
    },
    origen: {
        type: String,
        required: false
    },
    imagen: {
        type: String,
        required: true
    },
    base: {
        type: String,
        required: true
    },
    marcas: [marcasSchema],
});
module.exports = Drink = mongoose.model("drinks", DrinkSchema);
