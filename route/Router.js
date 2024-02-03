import express from 'express'
import { addPost,getPost,getDatabyCat,getPostMostRecent ,getBreaknews, getAllMostRecent,getMostRecentOne,getFeatureMostRecentOne,getInternationaleMostRecentOne} from '../controller/blogController.js';

const Route=express.Router();
Route.get("/get/news/:cat",getDatabyCat);
Route.get("/get/news/recent/:cat",getPostMostRecent);
Route.get("/get/breaknews",getBreaknews)
Route.get("/all/mostrecent",getAllMostRecent)
Route.get("/one/recent",getMostRecentOne)
Route.get("/one/feature",getFeatureMostRecentOne)
Route.get("/one/international",getInternationaleMostRecentOne)


export default Route;
