const express = require('express');
const productRoute = require('./routes/product')
const app = express();

app.use(express.json())

app.use(productRoute)



app.listen(5000, () =>{
    console.log("server is running on port 5000");
})