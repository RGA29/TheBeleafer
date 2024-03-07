const db = require("../models/productModels");

const productController = {}; 

productController.getProducts = async (req, res, next)=>{
    try {
        const productQuery = "SELECT * from products; "
        const result = await db.query(productQuery); 
        //console.log("from database", result.rows);
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

productController.addProductToCard = async (req, res, next)=>{
    try {
        const product_id = req.body.id
        const customer_id = 1; // TO BE UPDATED WHEN I BUILD AUTH- FOR NOW ALL CUSTOMERS ARE CUSTOMER 1 
        const params = [product_id, customer_id]
        //console.log("product ID", product_id)
        const addQuery = "INSERT INTO orders (product_id, customer_id) values ($1, $2)"
        const result = await db.query(addQuery, params)
        res.locals.done = result; 
        //console.log("result", result);
        return next(); 
    }

    catch (err){
        return next({
            log: 'Express error handler caught error in productController.addProductToCard', 
            status: 404, 
            message: { err: 'An error occurred in retreiving data in productController.addProductToCard' }, 
        })
    }
}

productController.getCart = async (req, res, next) => {
    try {
        params = [1] // need to update this when auth is in place, right now all orders are for customer 1 
        const cartQuery = "SELECT COUNT (customer_id) FROM orders WHERE customer_id = $1" 
        const result = await db.query(cartQuery, params)
        res.locals.cart = result.rows[0].count; 
       //console.log("cart count", result)
        return next()
    }
    catch (err) {
        return next({
            log: 'Express error handler caught error in productController.getCart', 
            status: 404, 
            message: { err: 'An error occurred in retreiving data in productController.getCart' }, 
        })
    }
}

productController.getDetails = async (req, res, next) => {
    try{
        const detailQuery = "SELECT DISTINCT product_id FROM orders;"
        const result = await db.query(detailQuery)
        const productArray = []
        result.rows.forEach(element => {
            productArray.push(element.product_id)
        });
        const countQuery = "SELECT COUNT (customer_id) FROM orders WHERE product_id = $1"
        const prodInfo = "SELECT name, image, price FROM products WHERE id = $1;"
        const allInfoArray = [];

        for (let i = 0; i < productArray.length; i++){
            let prodObj = {}; 
            const params = [productArray[i]]
            //console.log("params", params)
            prodObj['prod_id'] = productArray[i];            
            
            const countResult = await db.query(countQuery, params); 
            //console.log("count", countResult.rows[0].count)
            prodObj['count'] = countResult.rows[0].count; 

            const detailsResult = await db.query(prodInfo, params); 
            //console.log("details", detailsResult.rows[0]);
            const newinfo = detailsResult.rows[0]
            const {name, image, price} = newinfo
            prodObj['name'] = name
            prodObj ['image'] = image
            prodObj ['price'] = price; 
            allInfoArray.push(prodObj)
        }
        //console.log("final array", allInfoArray)
        res.locals.details = allInfoArray
        return next(); 
    }
    catch(err) {
        return next({
            log: 'Express error handler caught error in productController.getDetail', 
            status: 404, 
            message: { err: 'An error occurred in retreiving data in productController.getDetail' }, 
        })
    }
}

module.exports= productController; 