import React from 'react';
// import icon from '../images/search-heart.svg'
import { SearchIcon } from './searchIcon';
import { CartIcon } from './CartIcon'; 
import { UserIcon } from './UserIcon';

//<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>

const NavBar = ({cartCount, openModal}) => {
    const openDetailsModal = (e) => {
        const top = e.pageY + 15; 
        const left = e.pageX - 200;
        openModal({top, left})
    }
    return (
        <header className='navheader'>
            <div href="#" className='logo'>
                <img src='https://i.imgur.com/AXunDtc.png'></img>

            </div>

            <nav className="navbar">
                <a href="#"><SearchIcon/> Search</a>
                <a href="#"><UserIcon/>Login</a>
                <a href="#" onClick={e=> openDetailsModal(e)}><CartIcon/>Cart ({cartCount})</a>
            </nav>
        </header>
    )

}

export default NavBar; 