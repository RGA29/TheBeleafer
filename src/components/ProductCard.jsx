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
                <li className="prodDetail">Beginner Friendly: {beginnerFriendly}</li>
                <li className="prodDetail">Pet Friendly: {petFriendly}</li>
            </ul>
        </article>
    )

}

export default ProductCard; 