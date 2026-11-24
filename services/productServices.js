let products = [{id:1,name:"laptop",price:60000},
                {id:2,name:"Mobile",price:25000},
                {id:3,name:"keyboard",price:20000}
];

//get all products

function getAllProducts(){
    return products;
}

//creat products
function createProduct(name,price){
    //create new products
    const newProduct = {
        id:products.length ? Math.max(...products.map(product => product.id)) + 1 : 1,
        name,
        price
    };

    //add product to array
    products.push(newProduct);

    //return new product
    return newProduct;
}

//get product by ID 
function getProductBYId(id){
    
    //find the id
    const product = products.find(p=>p.id===id);

    //check product exists 
    if(!product){
        return null;
    }
    //return product
    return product;
}

//update product 
function updateProduct(id,updatedData){
    //find product by id
    const product = products.find(p=>p.id===id);

    //check product exists
    if(!product){
        return null;
    }
    //update product
    Object.assign(product,updatedData);

    //return 
    return product;
}

//delete product
function deleteProduct(id){
    //find product index by id
    const index = products.findIndex(p=>p.id === id);
    
    //check product
    if(index === -1){
        return null;
    }

    //remove and return the deleted product
    return products.splice(index, 1)[0];
}
module.exports = {
    getAllProducts,
    createProduct,
    getProductBYId,
    updateProduct,
    deleteProduct
}
