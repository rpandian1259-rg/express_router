
const productService = require("../services/productServices");



exports.getAllProducts = (req,res)=>{
     //call service
    const products = productService.getAllProducts();

    res.status(200).json({
        success:true,
        data:products,
        message:"Get all products controller working"
    });
};

//creat Product

exports.creatProduct = (req,res)=>{
    //get data from client 
    const {name,price} = req.body;

    //call service
    const product = productService.createProduct(name,price);

    //send response
     res.status(201).json({
        success:true,
        data:product
     });
};

//get product by id
exports.getProductBYId = (req,res)=>{
    //get id
    const id = Number(req.params.id);

    //call services
    const product = productService.getProductBYId(id);

    //check product
    if(!product){
        return res.status(404).json({
            success:false,
            data:null,
            message:"Product not found"
        });
    }
    //send response 
    return res.status(200).json({
        success:true,
        data:product
    });
};

//update product
exports.updateProduct = (req,res)=>{
    //get id
    const id = Number(req.params.id);

    //get update data
    const updatedData = req.body;

    //call service
    const product = productService.updateProduct(id,updatedData);

    //check product
    if(!product){
        return res.status(404).json({
            success:false,
            data:null,
            message:"updatedData not found"
        });
    }
    //send response
    return res.status(200).json({
        success:true,
        data:product
    });
};

//delete products
exports.deleteProduct = (req,res)=>{
    //check id 
    const id = Number(req.params.id);
     
    //call service 
    const product = productService.deleteProduct(id);

    //check product
    if(!product){
        return res.status(404).json({
            success:false,
            data:null,
            message:"Product not found"
        });
    }

    //send response
    return res.status(200).json({
        success:true,
        data:product,
        message:"Product deleted successfully"
    });
}

