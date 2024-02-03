
import blogmodel from "../model/blogModel.js";

export const addPost=async(req,res)=>{
    try{
        
        const newBlog=new blogmodel(req.body);
        newBlog.save();
        res.status(200).json(req.body);

    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}
export const getPost=async(request,response)=>{
    try{
        const data=await blogmodel.find({})
        response.status(200).json(data);

    }
    catch(error){
        response.status(500).json(error)

    }

}
export const getDatabyCat=async(request,response)=>{
    try{
       const data=await blogmodel.find({cat:request.params.cat})
       response.status(200).json(data);
      

    }
    catch(error){
        response.status(500).json(error);
    }

}
export const getPostMostRecent=async(request,response)=>{
    try{
        const data=await blogmodel.find({cat:request.params.cat}).sort({createdAt:'desc'})
       response.status(200).json(data);

    }
    catch(error){
        response.status(500).json(error);

    }

}
export const getBreaknews=async(request,response)=>{
    try{
        const data=await blogmodel.find({tag:"Breaking News"})
        response.status(200).json(data)

    }
    catch(error){
        response.status(500).json(error)
    }

}
export const getAllMostRecent=async(request,response)=>{
    try{
        const data=await blogmodel.find({}).sort({createdAt:'desc'}).limit(6)
        response.status(200).json(data);
        

    }
    catch(error){
        response.status(500).json(error)
    }

}
export const getMostRecentOne=async()=>{
    try{
        const data=await blogmodel.find({}).sort({createdAt:'desc'}).limit(1);

    }
    catch(error){
        response.status(500).json(error)
    }

}
export const getFeatureMostRecentOne=async()=>{
    try{
        const data=await blogmodel.find({tag:'Feature'}).sort({createdAt:'desc'}).limit(1);

    }
    catch(error){
        response.status(500).json(error)
    }

}
export const getInternationaleMostRecentOne=async()=>{
    try{
        const data=await blogmodel.find({tag:'International'}).sort({createdAt:'desc'}).limit(1);

    }
    catch(error){
        response.status(500).json(error)
    }

}
