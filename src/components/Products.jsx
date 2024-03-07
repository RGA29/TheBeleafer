import React, {Component} from 'react'; 

import ProductCard from './ProductCard';

const Products =(props) => {

    const { products } = props;
    console.log("show me", products); 
        if (!products) return null; 
        if (!products.length) return (
        <div><h1>Sorry, no products found...</h1></div>
        );
        const prodElems = products.map((elem, i)=>{
            return (
            <ProductCard
                key ={i}
                info = {elem}
            />
            );
        });
    return (
        <section className='mainSection'>
        <header className="pageHeader">
            <h2>Find your next succulent, herb or tree</h2>
        </header>
        <div className='prodContainer'>
            {prodElems}
        </div>
    
    </section>

    )


}

export default Products; 
