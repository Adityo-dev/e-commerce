import "./Nav.css";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import navlogo from "../../../public/img/logo.png";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between text-black py-2">
      <div>
        <button onClick={() => setOpen(!open)} className="text-4xl lg:hidden">
          {open ? <IoCloseSharp /> : <MdMenu />}
        </button>
      </div>

      <div>
        <img style={{ width: "120px" }} src={navlogo} alt="" />
      </div>

      <div>
        <ul
          className={`lg:flex gap-8 text-[18px] lg:flex-row    ${
            open ? "left-0" : "-left-96"
          }`}
        >
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink>Categories</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Pages</NavLink>
        </ul>
      </div>

      <div className="flex gap-8 text-2xl">
        <NavLink>
          <IoIosSearch />
        </NavLink>
        <section>
          <div className="dropdown">
            <button className="dropbtn">
              <BiUserCircle />
            </button>
            <div className="dropdown-item bg-gray-300 text-gray-800">
              <NavLink to="/loginFrom">My Account</NavLink>
              <br />
              <hr />
              <NavLink to="/Wishlist">Wishlist</NavLink>
              <br />
              <hr />
              <NavLink to="/loginFrom">Login</NavLink>
            </div>
          </div>
        </section>
        <NavLink to="/shoppingCart">
          <MdOutlineShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
