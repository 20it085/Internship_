const express = require("express");

const Burger = require('./models/burgermodel')

const db = require("./db.js")
const app=express();
app.use(express.json());

const burgersRoute = require('./routes/BurgersRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.get("/",(req,res) => {
    res.send("Server working !!");
});

app.use('/api/burgers/',burgersRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)

// app.get('/getburgers',async(req,res)=>{
//     try{
//         const burg = await Burger.find()
//         res.status(200).send({data: burg})
//     }catch(err){
//         res.status(400).send({error:err})
//     }
// });


const port = process.env.PORT || 5000;

app.listen(port , ()=> `Server running on port `)
