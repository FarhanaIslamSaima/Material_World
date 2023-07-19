export const textCheck=async(request,response)=>{
    try{
        console.log("Hello whatsapp");
        response.status(200).json("Hello whatsapp");

    }
    catch(error){
        response.status(500).json(error);
    }

}