
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})


// const uploadFiles = async (filepath) => {

//     try{
//        const result = await cloudinary.uploader.upload(filepath);
//        console.log(result);
//        return result;
//     }
//    catch (error){
//        console.log(error.message)
//    }
// }


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:'RestEasy_images',
        allowedFormats:['png' , 'jpg' , 'jpeg'],
    }
})


module.exports = {cloudinary , storage  }