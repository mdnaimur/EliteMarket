import "./Navbar.scss";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from 'react';

function Navbar() {
  const [open,setOpen] = useState(false)


  return (
    <div className="navbar">

      <div className="wrapper">

        <div className="left">
        <Link className='link' to="/">  Elite-Market</Link>
        </div>

        <div className="center">
          <div className="item">
            <Link className='link' to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Children</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/4">Accessories</Link>
          </div>
        </div>

        <div className="right">
        <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
              {/* <span>{products.length}</span> */}
            </div>
          </div>

          <div className="item">
            <img src="img/bd.png" alt="Flag" width="20px" height="15px" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>BDT</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
