import React, { Component } from 'react'; 
import Products from './components/Products'; 
import NavBar from './components/NavBar'; 
import MainContainer from './containers/MainContainer';

// import './stylesheets/styles.css';

class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cartCount: 0, 
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
        .catch(err => console.log('App.componentDidMount: get characters: ERROR: ', err))

        // fetch('/api/cart')
        //   .then(res=>res.json())
        //   .then((cart)=>{
        //     return this.setState({
        //       cartCount: cart,
        //     }); 
        //   })
        //   .catch(err => console.log('App.componentDidMount: get cart: ERROR: ', err))

        }

    openModal(position) {
        this.setState({
          modalState: {
            ...this.state.modalState,
            open: true,
            position,
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
            <MainContainer 
            modalState = {this.state.modalState}
            cartCount = {this.state.cartCount}
            products= {this.state.products}
            openModal = {this.openModal}
            closeModal = {this.closeModal}
            />
          </div>
            
        )
    }
}

export default App; 
