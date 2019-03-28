require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
// connects our server to the heroku database
// port 3000
const pc = require('./products_controller')


massive(CONNECTION_STRING)
.then(database=>{
    app.set('db', database)
    console.log(`Database was set!!!`)})
    // sets the database to variable 'db'
.catch(err=>console.log(`OH MY GOD:`, err))

app.use(express.json());
// middleware with code above


app.get('/api/products', pc.getAll);

app.get('/api/product/:id', pc.getOne);

app.put('/api/product/:id', pc.update);

app.post('/api/products', pc.create);

app.delete('/api/product/:id', pc.delete)






app.listen(SERVER_PORT, ()=>console.log(`serverisrunningonport${SERVER_PORT}`));


