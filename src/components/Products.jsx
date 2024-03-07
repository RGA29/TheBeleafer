import React, {Component} from 'react'; 

import ProductCard from './ProductCard';

class Products extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            fetchedProd: false, 
            products: [],
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

    componentDidMount() {
        fetch('/api/')
        .then(res => res.json())
        .then((products)=> {
            if(!Array.isArray(products)) products = []; 
            return this.setState({
                products,
                fetchedProd: true
            });
        })
        .catch(err => console.log('Products.componentDidMount: get characters: ERROR: ', err))
    }

    render (){
        // if (!this.state.fetchedProd) return (
        //     <div>
        //         <h1>Loading data, please wait..</h1>
        //     </div>
        // )
        const { products } = this.state; 
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
}

export default Products; 
