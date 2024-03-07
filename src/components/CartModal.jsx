import React, { useState, useEffect } from 'react'; 
import { Summary } from './Summary';


export const CartModal= ({position, closeModal}) => {
    const [details, setDetails] = useState([])
    console.log("position", position)

    useEffect(()=>{
        fetch('/api/details')
        .then(resp=> resp.json())
        .then (data => {
            //console.log("all details here", data)
            setDetails([...data]);
        })
        .catch(err=> console.log("CardModal: fetch api/details ERROR: ", err)); 
    }, [])

    let array = details; 
    console.log('array', array)
    const info = array.map((element, i)=> {
        return <Summary
        name = {element.name}
        price = {element.price}
        image = {element.image}
        count = {element.count}
        />
    })
   
    
    function sum (array) {
        let total = 0; 
        if (array.length === 0) total = 0; 
        else {
            for(let i = 0; i<array.length; i++){
                total = total + (array[i].price * array[i].count)

            }
        }
        return total; 
    }

    const total = sum(array)
    console.log("total", total)
    
    return (    
        <div className='modal' style = {position}>
            <div className='modalheader'>
            <h3>Order Summary </h3>
            <button className='close' onClick={closeModal}>X</button>
            </div>
            {info}
            <table><tr>
            <td id='total'><h3>Total</h3></td>
            <td id='total'><span>${Number.parseFloat(total).toFixed(2)}</span> </td>
            </tr></table>
            <button className='checkout'>CHECKOUT</button>
            
        </div>
    )
}