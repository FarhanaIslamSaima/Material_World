import express from "express"
import Cors from "cors"
import bodyParser from "body-parser"

const app=express();
const port=8000;
app.listen(port,()=>{
    console.log("Server connected succefully");
})