import React, {Component} from 'react'; 

import ProductCard from './ProductCard';

class Products extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            fetchedProd: false, 
            products: [{ 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
            }],
            // modalState: {
            //     open: false, 
            //     type: null, 
            //     position: { top:0, left:0 }, 
            //     id: null
            // }
        };
        
        // this.openModal = this.openModal.bind(this); 
        // this.closeModal = this.closeModal.bind(this);
    }

    render (){
        const { products } = this.state; 
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
                    <h2>Products</h2>
                </header>
                <div className='prodContainer'>
                    {prodElems}
                </div>

            </section>
            
        )
    }
}

export default Products; 
