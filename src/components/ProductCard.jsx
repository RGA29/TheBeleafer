import React from 'react'; 


const ProductCard = ({info}) => {
    const { name, price , beginnerFriendly, petFriendly } = info; 
    return (
        <article className="card prodCard">
            
            <div className='prodHeadContaner'>
                <h3 className='prodName'>{name}</h3>
            </div>
            <ul className="prodDetailsList">
                <li className="prodDetail">price: {price}</li>
                <li className="prodDetail">Beginner Friendly: {beginnerFriendly}</li>
                <li className="prodDetail">Pet Friendly: {petFriendly}</li>
            </ul>
        </article>
    )

}

export default ProductCard; 