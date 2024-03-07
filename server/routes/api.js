const express = require('express'); 

// require controller 
const productController = require('../controllers/productController'); 


const router = express.Router(); 

router.get('/', productController.getProducts, (req, res)=>{
    res.status(200).json(res.locals.info); 
})

module.exports = router; 