import express from "express"
import Cors from "cors"
import bodyParser from "body-parser"
import Route from "./route/Router.js";

const app=express();
app.use(Cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",Route);
const port=8000;
app.listen(port,()=>{
    console.log("Server connected succefully");
})