import React from 'react'; 
import icon from '../images/search-heart.svg'

//<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>

const NavBar = (props) => {
    return (
        <header className='navheader'>
            <div href="#" className='logo'>

            </div>

            <nav className="navbar">
                <a href="#"><img src={icon}></img>Search</a>
                <a href="#">Login</a>
                <a href="#">Cart</a>
            </nav>
        </header>
    )

}

export default NavBar; 