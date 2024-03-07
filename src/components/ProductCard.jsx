import React from 'react';
import { PetIcon } from './PetIcon';
import { BeginnerIcon } from './BeginnerIcon';


const ProductCard = ({info}) => {
    const { id, name, price , image, beg_friendly, pet_friendly} = info; 
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
        }
      
    return (
        <article className="card prodCard">
            <div className='imageContainer'>
                <img src={image}></img>
            </div>
            
            <div className='prodHeadContaner'>
                <h3 className='prodName'>{name}</h3>
            </div>
            <a className="prodPrice">${Number.parseFloat(price).toFixed(2)}</a>
            <ul className="prodDetailsList">
                <li className="prodDetail"> <span><BeginnerIcon/>Beginner Friendly:</span> {beg_friendly ? 'Yes' : 'No'} </li>
                <li className="prodDetail"><span><PetIcon/>Pet Friendly:</span> {pet_friendly ? 'Yes' : 'No'}</li>
            </ul>
            <div className='buyButton'>
                <button type="submit" onClick={e=>addToCart(id)}>ADD TO CART</button>
            </div>
        </article>
    )

}

export default ProductCard; 