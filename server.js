require('dotenv').config();
const express = require('express')
const app = express();
const Port = process.env.PORT || 3000;
const routers = require('./routers/router');
const connectDB = require('./db/connect');
const uri = process.env.MONGODB_URL;

const db = async()=>{
    try{
        await connectDB(uri);
        console.log("Connected");
    }
    catch(e){
        console.log(e);
    }
}

db();
app.get("/", (req, res)=>{
    res.send('Hello there');
})

app.use('/api/pokemoninfo', routers);

app.listen(Port, ()=>{
    console.log(`This is your server on port ${Port}`);
})