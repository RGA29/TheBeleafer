import React, { Component } from 'react'; 
import Products from './components/Products'; 
import NavBar from './components/NavBar'; 

// import './stylesheets/styles.css';


const App = props => {
    return (
        <div className='appContainer'> 
        <NavBar/>
        <Products/>
        
        </div>
    );
};

export default App; 