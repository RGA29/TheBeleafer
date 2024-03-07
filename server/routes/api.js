const express = require('express'); 

// require controller 
const productController = require('../controllers/productController'); 


const router = express.Router(); 

router.get('/', productController.getProducts, (req, res)=>{
    res.status(200).json(res.locals.info); 
})

router.post('/', productController.addProductToCard, (req, res)=>{
    res.status(200).json(res.locals.done); 
})

router.get('/cart', productController.getCart, (req, res)=>{
    res.status(200).json(res.locals.cart); 
})

module.exports = router; 