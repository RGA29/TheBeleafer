import React from 'react'; 


const ProductCard = ({info}) => {
    const { name, price , beginnerFriendly, petFriendly, imgsrc } = info; 
    return (
        <article className="card prodCard">
            <div className='imageContainer'>
                <img src={imgsrc}></img>
            </div>
            
            <div className='prodHeadContaner'>
                <h3 className='prodName'>{name}</h3>
            </div>
            <a className="prodPrice">{price}</a>
            <ul className="prodDetailsList">
                <li className="prodDetail"> <span>Beginner Friendly:</span> {beginnerFriendly}</li>
                <li className="prodDetail"><span>Pet Friendly:</span> {petFriendly}</li>
            </ul>
            <div className='buyButton'>
                <button type="button">ADD TO CART</button>
            </div>
        </article>
    )

}

export default ProductCard; 