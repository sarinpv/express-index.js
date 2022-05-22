var express = require('express');
var app = express();

// var products = require('./routes/product.js');
// var users = require('./routes/users.js')
// var order = require('./routes/order.js')
// var review = require ('./routes/review.js')
// var items = require ('./routes/items.js');
//const router = require('./routes/order.js');

var moongose = require ("mongoose");
var db_URL = require ("./properties").DB_URL;

moongose.connect(db_URL);

moongose.connection.on("connected",()=>{
    console.log("Connected to MongoDB using MongooseJS")
})



// app.use("/products", products);

// app.use("/users", users);

// app.use("/order", order);

// app.use("/review", review);

// app.use("/items", items);

// app.get("/getUser", (req, res)=>{
//     res.send("./routes/product.js");
// })



app.listen(4001);
