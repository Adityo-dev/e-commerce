import { FaShoppingCart } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import { CardModal } from "../card-modal/card-modal";

const Men = ({ Women }) => {
  const { name, cover, price, title } = Women;
  return (
    <div className="mx-auto -20 max-w-[350px] space-y-6 rounded-xl px-4 pb-8 pt-4    bg-gray-200">
      <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          {/* <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
            30% off
          </button> */}
        </div>
        <img className="h-full w-full rounded-lg bg-white" src={cover} alt="" />
      </div>
      <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
        <h4 className="  text-gray-800 md:text-sm">{name}</h4>
        <p className="text-sm text-gray-800 md:text-base lg:text-lg">
          ${price}
        </p>
      </div>
      <div className="flex  items-center justify-center gap-3 text-sm md:text-base">
        <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans  text-white duration-300 hover:scale-105 hover:bg-sky-600">
          <FaShoppingCart />
        </button>
        <button>
          <CardModal cardDetails={Women} />
        </button>
        <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans  text-white duration-300 hover:scale-105 hover:bg-sky-600">
          <GiLoveMystery />
        </button>
      </div>
    </div>
  );
};

export default Men;
