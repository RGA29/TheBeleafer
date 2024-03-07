import React, { useState, useEffect } from 'react'; 


import NavBar from '../components/NavBar';
import Products from '../components/Products';
import { CartModal } from '../components/CartModal';

const MainContainer = props => {
    const [cart, setCart] = useState(null); 

    useEffect(()=>{
        fetch('/api/cart')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setCart(data)
        })
        .catch(err => console.log("cart fetch api error: ",  err))
    }, [cart])

    function addToCart (prodId) {
        fetch('/api/', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({id: prodId})
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log(data);
            })
            .catch(err => console.log('add to cart fetch /api/: ERROR: ', err));
            setCart(cart+1); 
        }


    return (
        <div className='appContainer'> 
            <NavBar cartCount = {cart}
            openModal = {props.openModal}/>
            <Products products= {props.products}
            addToCart = {addToCart}/>


            { props.modalState.open &&
            <CartModal 
            type = {props.modalState.type}
            position = {props.modalState.position}
            id = {props.modalState.id}
            closeModal = {props.closeModal}/>
            }
            
        </div>
    )
}

export default MainContainer