import React from 'react';

export const Summary = ({name, price, image, count}) => {
    return (
        <div className='modalsummary'>
            <table>
                <tr>
                    <td id='img'><img src={image}></img></td>
                    <td id='name'>{name}</td>
                    <td id='price'>${Number.parseFloat(price).toFixed(2)}</td>
                    <td id='count'>({count})</td>
                </tr>
            {/* <a>{name}</a> <a>${Number.parseFloat(price).toFixed(2)}</a> <a>({count})</a> */}
            </table>
        </div>
    )
}