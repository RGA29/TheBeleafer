import React from 'react'; 


const ProductCard = ({info}) => {
    return (
        <article className="card prodCard">
            <div className='prodHeadContaner'>
                <h3 className='prodName'>this is displaying: {info}</h3>
            </div>
        </article>
    )

}

export default ProductCard; 