import express from 'express'
import { addPost,getPost,getDatabyCat } from '../controller/blogController.js';
const Route=express.Router();
Route.get("/get/news/:cat",getDatabyCat);


export default Route;
