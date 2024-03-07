const db = require("../models/productModels");

const productController = {}; 

productController.getProducts = async (req, res, next)=>{
    try {
        const productQuery = "SELECT * from products; "
        const result = await db.query(productQuery); 
        console.log("from database", result.rows);
        res.locals.info = result.rows; 
        next(); 
    }
    catch (err){
        return next({
            log: 'Express error handler caught error in productController.getProducts', 
            status: 404, 
            message: { err: 'An error occurred in retreiving data in productController.getProducts' }, 
        })
    }
}

module.exports= productController; 