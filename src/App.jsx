import React, { Component } from 'react'; 
import Products from './components/Products'; 
import NavBar from './components/NavBar'; 

// import './stylesheets/styles.css';

class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            fetchedProd: false, 
            products: [],
            modalState: {
                open: false, 
                type: null, 
                position: { top:0, left:0 }, 
                id: null
            }
        };
        
        this.openModal = this.openModal.bind(this); 
        this.closeModal = this.closeModal.bind(this);
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

    openModal(type, position, id) {
        this.setState({
          modalState: {
            ...this.state.modalState,
            open: true,
            type,
            position,
            id
          }
        });
      }

      closeModal() {
        this.setState({
          modalState: {
            ...this.state.modalState,
            open: false
          }
        });
      }
    

    render (){
        return (
            <div className='appContainer'> 
            <NavBar/>
            <Products products= {this.state.products}/>
        </div>
            
        )
    }
}

export default App; 
