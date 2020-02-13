const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ingredientes: [
        {
           nombre: {
                type:String
            },
            cantidad:{
                type:String
            }
        }
    ],
    instrucciones: [
        {
            numero:{
                type: Number
            },
            paso:{
                type: String
            }
        }
    ],
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
    }
});
module.exports = Drink = mongoose.model("drinks", DrinkSchema);
