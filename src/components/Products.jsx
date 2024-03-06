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
                imgsrc: 'https://plantly.io/wp-content/uploads/2020/10/IMG-2933-300x300.jpg'
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
                imgsrc: 'https://plantly.io/wp-content/uploads/2020/10/IMG-2933-300x300.jpg'
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
                imgsrc: 'https://cdn.shopify.com/s/files/1/0068/4215/5090/products/FicusGinseng_DTL_6_large.jpg?v=1619010903'
            }, { 
                name: 'Peperomia Santorini',
                price: '$25.00',
                beginnerFriendly: 'Yes',
                petFriendly: 'No',
                imgsrc: 'https://cdn.shopify.com/s/files/1/0068/4215/5090/products/FicusGinseng_DTL_6_large.jpg?v=1619010903'
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
