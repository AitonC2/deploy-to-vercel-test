const express = require('express');
const app  = express();
const PORT = process.env.PORT || 3300
const product = require('./api/product');

app.use("/api/product", product);
app.listen(PORT, ()=>{console.log(`running on localhost ${PORT}`)});