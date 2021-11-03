import React from 'react'
import "./css/header.css"
import {Link} from "react-router-dom";
import SearchIcons from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
let Header = () => {
  return (
    <div className="header">
      {/* img of logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt="Amazon-logo"
        />
      </Link>
      {/* Search box */}
      <input type="text" className="header_searchInput" />
      <SearchIcons className="header_searchIcon" />

      {/* <div className="header_nav">
          <Link to ="/login" className="header_link">
            <div className="header_option">
              <span className = "header_optionLineOne">Hello Guest</span>
              <span className = "header_optionLineTwo">Sign in</span>
            </div>
          </Link>
          <Link to = "/" className="header_link">
            <div className="header_option">
              <span className = "header_optionLineOne">Returns</span>
              <span className = "header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to ="/" className="header_link">
            <div className="header_option">
              <span className = "header_optionLineOne">Your</span>
              <span className = "header_optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to ="/checkout" className ="header_link">
              <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className = "header_optionLineTwo header_basketCount">0</span>
              </div>
          
          </Link>

        </div>
      </div>
    );
}

export default Header */}
      <div className="header_nav">
        <Link to="/login" className="header_Link">
          <div className="header_option">
            <span className="header-optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header_Link">
          <div className="header_option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header_Link">
          <div className="header_option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_Link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;