import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Image from './images/logo.png'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
    return (
        <nav className="header">
            <Link to = "/">
            <img
            className="header__logo" 
            src = {Image}/>
            </Link> 
            <div className="header__search">
                <input className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                
                <Link to = "/login" className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello </span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>   
                </Link>
                
                <Link to = "/login" className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>   
                </Link>

                <Link to = "/login" className="header__Link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>   
                </Link>

                <Link to = "/checkOut" className="header__Link">
                    <div className="header__option_basket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header_basketcount">0</span>
                    </div>   
                </Link>
            </div>
        </nav>
    )
}

export default Header
