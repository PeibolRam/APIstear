const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const Drink = require('./models/drinks');
const User = require('./models/users')

const port = 3003;

const app = express();

require('dotenv').config()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,  useUnifiedTopology: true }, (err) => {
	if (err) {
		console.log('Conectate a mongo primero');
		return err;
	}
	console.log('Conectado a MongoDB');
});

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/public', express.static('public'));
app.use(cors())

//Rutas users
app.post('/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})
//fin rutas users

//Rutas drinks
app.get('/drinks', (req, res)=> {
    Drink.find({}, (err, drinks) => { 
		if(err) return res.status(400).send(err)
		res.status(200).send(drinks)
	})
})

app.get("/drinks/id/:_id", (req, res) => {
    const bebida = req.params._id
    Drink.find({_id:bebida}).then(drink => {
        res.send(drink)
    })
})

app.get("/drinks/nombre/:nombre", (req, res) => {
    const bebida = req.params.nombre
    Drink.find({nombre:bebida}).then(drink => {
        res.send(drink)
    })
})

app.get("/drinks/base/:base", (req, res) => {
    const bebida = req.params.base
    Drink.find({base:bebida}).then(drink => {
        res.send(drink)
    })
})

app.post('/drinks/register', (req, res) => {
    const drink = new Drink(req.body)
    drink.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})
//fin rutas drinks

app.listen(port, () => console.log(`Servidor corriendo en el puerto: ${port}`));