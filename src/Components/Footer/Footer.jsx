import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import { FaCcVisa } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex  justify-around ap-12 bg-neutral-200 p-16 ">
      <div>
        <h1 className="text-2xl mb-8 font-bold text-gray-600	">About Us.</h1>
        <p className="flex flex-wrap text-gray-500">
          Minimal E-Commerce is a dynamic and innovative <br /> online retail
          platform that offers a wide range of <br /> products to customers
          worldwide.
        </p>

        <div className="flex gap-7 mt-6 text-[20px]  text-gray-700">
          <NavLink
            target="_blank"
            to="https://www.facebook.com/koushik.barmon.79"
          >
            <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
          </NavLink>
          <NavLink target="_blank">
            <FaWhatsapp className="hover:text-blue-700 cursor-pointer" />
          </NavLink>
          <NavLink target="_blank">
            <BsTwitter className="hover:text-blue-700 cursor-pointer" />
          </NavLink>
          <NavLink target="_blank" to="https://www.instagram.com/adittyo_dev/">
            <FaInstagram className="hover:text-blue-700 cursor-pointer" />
          </NavLink>
        </div>

        <h3 className="text-gray-500 mt-8 ">Guaranteed safe checkout</h3>

        <div className="flex gap-7 text-[22px]  text-gray-500 mt-3">
          <BsCreditCard2FrontFill />
          <FaCcVisa />
          <FaBitcoin />
        </div>
      </div>

      <div>
        <h2 className="text-2xl mb- font-bold text-gray-600	">Quick Link</h2>
        <div className="flex flex-col gap-4 mt-8 text-gray-500 ">
          <NavLink>My Account</NavLink>
          <NavLink>My Cart</NavLink>
          <NavLink>Wishlist</NavLink>
          <NavLink>Gift Card</NavLink>
          <NavLink>Need Help?</NavLink>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mb- font-bold text-gray-600	">Information</h1>
        <div className="flex flex-col gap-4 mt-8 text-gray-500">
          <NavLink>About us</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>Size Chart</NavLink>
          <NavLink>Need Help?</NavLink>
          <NavLink>FAQ</NavLink>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mb- font-bold text-gray-600	">Policies</h1>
        <div className="flex flex-col gap-4 mt-8 text-gray-500">
          <NavLink>Privacy Policy</NavLink>
          <NavLink>Refund Policy</NavLink>
          <NavLink>Terms of Service</NavLink>
          <NavLink>Shipping Policy</NavLink>
          <NavLink>Contact Information</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
