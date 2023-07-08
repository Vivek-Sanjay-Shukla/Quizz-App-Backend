import express from "express"
import cors from 'cors'
import {config} from 'dotenv'
import router from "./router/route.js";


// mongodb connection
import connect from './database/connection.js'

const app = express();

// app middleware
app.use(cors());
app.use(express.json())
config();

// applicartion port 
const port = process.env.PORT || 8080;


// routes
app.use('/api',router);  // api


app.get('/',(req,res)=>{
    try{
       res.json("Get request")
    }catch(err){
        res.json(err);
    }
})


// start server  only when we have valid database connection

connect().then(() => {

    try{
      app.listen(port,() => {
        console.log(`Server connected to http://localhost:${port}`);
      })
    }catch(err){
        console.log("cannot connect to the server");
    }

}).catch((err)=>{
   console.log("database not connected");
})
