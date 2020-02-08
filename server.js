const express = require("express");
const mongoose = require("mongoose");
const  Drink = require('./models/drinks')
const port = 3002;

const app = express();

mongoose.connect('mongodb://localhost:27017/chupapi', { useNewUrlParser: true,  useUnifiedTopology: true }, (err) => {
	if (err) {
		console.log('Conectate a mongo primero');
		return err;
	}
	console.log('Conectado a MongoDB');
});

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/drinks', (req, res)=> {
    Drink.find({}, (err, drinks) => { 
		if(err) return res.status(400).send(err)
		res.status(200).send(drinks)
	})
})

app.get("/drinks/:id", (req, res) => {
    const bebida = req.params.id

    Drink.find({id:bebida}).then(drink => {
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

app.listen(port, () => console.log(`Servidor corriendo en el puerto: ${port}`));