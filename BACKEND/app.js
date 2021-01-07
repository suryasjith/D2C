require('dotenv').config();
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//SECTION : my Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')


//SECTION : db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected")
});


//SECTION : middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//NOTE : injected middlewares
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);



// SECTION : PORT
const port = process.env.PORT;

//SECTION : Starting server
app.listen(port, () => console.log(`app listening on port ${port}!`))

