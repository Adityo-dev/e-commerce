import { NavLink } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const Wishlist = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 text-gray-800  py-6">
      <div className=" text-5xl">
        <h1>Wishlist</h1>
      </div>

      <div className="flex gap-2 mt-5 text-[1.5rem] justify-center items-center">
        <NavLink to="/home" className={`font-semibold`}>
          Home
        </NavLink>{" "}
        <HiChevronRight />
        <p className=" text-blue-500">Wishlist</p>
      </div>
    </div>
  );
};

export default Wishlist;
