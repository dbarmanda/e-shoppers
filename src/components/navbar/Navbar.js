import React from "react";
import "./navbar.css";
import logo from "./logo1.png";
import { Link } from "react-router-dom";

//material ui
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FlagIcon from '@mui/icons-material/Flag';
import  {useSelector} from "react-redux";

//redux store 
import { selectBasket } from "../../features/basketSlice";



function Navbar() {

  const basket = useSelector(selectBasket);
  
  return (
    <nav className="navbar">
      {/* logo  */}
      <Link className="logo" to="/">
        <img className="navbar_logo" src={logo} alt="" />
      </Link>

      {/* search box */}
      <div className="navbar_search">
        <input type="text" className="navbar_searchInput" />
        <SearchIcon className="navbar_searchIcon" />
      </div>

      {/* 3 icon links + kart */}
      <div className="navbar_nav">

        <div className="navbar_link">
          <div className="navbar_flag">
            <FlagIcon />
          </div>
        </div>

        <Link className="navbar_link" to="/login">
          <div className="navbar_option">
            <span className="navbar_optionOne">Hello,</span>
            <span className="navbar_optionTwo">Sign In</span>
          </div>
        </Link> 
        
        <Link className="navbar_link" to="/">
          <div className="navbar_option">
            <span className="navbar_optionOne">Returns</span>
            <span className="navbar_optionTwo">& Orders</span>
          </div>
        </Link>

        <Link className="navbar_link" to="/login">
          <div className="navbar_option">
            <span className="navbar_optionOne">Go</span>
            <span className="navbar_optionTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* Basket icon (state inside ) */}
      <Link className="navbar_link" to='/checkout'>
        <div className="navbar_optionBasket">
              {/* shopping icon  */}
              <LocalGroceryStoreIcon className="navbar_kart"/>
              {/* no.of items in basket  */}
              <span className="navbar_optionTwo navbar_basketCount">{basket.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
