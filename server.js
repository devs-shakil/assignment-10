const express = require('express');
const mongoose = require('mongoose');
const authenticate = require('./middleware/auth')
const routeProduct = require('./routes/product')

const app = express();

app.use(express.json());

//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/products')
.then(() =>{
    console.log("Database is connected");
})
.catch((error) =>{
    console.error("Failed to connect")
});

app.use(authenticate)
app.use(routeProduct)



app.listen(5000, () =>{
    console.log("server is running on port 5000");
})