const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const client = new MongoClient(process.env.MONGO_URL);
async function connectDB(){
    try{
        await client.connect();
        console.log("Connected !!!");
        db = client.db("ecomm");
    }catch(err){
        console.log(err);
    }
}
connectDB();

app.get("/laptops",async (req,res)=>{
    try{
        laptop_collection = db.collection("laptops");
        const laptops = await laptop_collection.find().toArray();
        res.status(200).json(laptops);
    }catch(err){
        console.log(err);
    }
});

app.get("/mobiles",async (req,res)=>{
    try{
        mobile_collection = db.collection("mobiles");
        const mobiles = await mobile_collection.find().toArray();
        res.status(200).json(mobiles);
    }catch(err){
        console.log(err);
    }
});

app.get("/watches",async (req,res)=>{
    try{
        watch_collection = db.collection("watches");
        const watches = await watch_collection.find().toArray();
        res.status(200).json(watches);
    }catch(err){
        console.log(err);
    }
});


app.listen(9090,()=>{
    console.log("server listening port no. 9090");
});

// http://localhost:9090/laptops
// http://localhost:9090/mobiles
// http://localhost:9090/watches