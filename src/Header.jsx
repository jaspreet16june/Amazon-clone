import React from 'react'
import "./css/header.css"
import {Link} from "react-router-dom";
import SearchIcons from "@material-ui/icons/Search";
let Header=()=> {
    return (
      <div className="header">
        {/* img of logo */}
        <Link to ="/">
        <img
          className="header_logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt="Amazon-logo"
        />
        </Link>
        {/* Search box */}
        <input type="text" className = "header_searchInput"/>
        <SearchIcons className = "header_searchIcon" />
      </div>
    );
}

export default Header
