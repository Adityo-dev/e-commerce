import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { GoX } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

export const CardModal = ({ cardDetails }) => {
  const { name, title, cover, price } = cardDetails;
  const [openModal, setOpenModal] = useState(false);

  // Select --------------->
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");
  // array of options
  const options = ["M", "L", "XL", "XXL"];

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans  text-white duration-300 hover:scale-105 hover:bg-sky-600"
      >
        <IoEyeSharp />
      </button>

      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`  absolute max-w-5xl rounded-lg bg-white p-3 pb-8 drop-shadow-2xl  ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          } `}
        >
          <div className="mx-auto mr-0 w-8  text-3xl cursor-pointer fill-black dark:fill-white">
            <GoX onClick={() => setOpenModal(false)} />
          </div>

          <div className="flex gap-12 ">
            <div className="bg-gray-200 w-[50%] rounded-lg ">
              <img src={cover} alt="" />
            </div>
            <div className="w-[50%] text-left mt-6">
              <h1 className="mb-4 text-2xl text-gray-700 font-semibold">
                {name}
              </h1>
              <p className="mb-4 text-2xl text-gray-700 font-semibold">
                ${price}
              </p>
              <p className="mb-12 px-1   text-[1.2rem] text-gray-700 opacity-80">
                {title}
              </p>

              {/* Card size select -----------------------------> */}
              <div className="flex justify-around ">
                <div>
                  <h2 className="text-[1.5rem] text-gray-600">Size: </h2>
                </div>
                <div>
                  {/* dropdown - btn */}
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border"
                  >
                    <h1 className="font-medium text-gray-600">
                      {selectedValue}
                    </h1>
                    <div
                      className={`${
                        isOpen ? "-rotate-180" : "rotate-0"
                      } duration-300`}
                    >
                      <GoChevronDown />
                    </div>
                  </div>
                  {/* dropdown - options  */}
                  <div
                    className={`${
                      isOpen
                        ? "visible top-0 opacity-100"
                        : "invisible -top-4 opacity-0"
                    } relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}
                  >
                    {options?.map((option, idx) => (
                      <div
                        key={idx}
                        onClick={(e) => {
                          setSelectedValue(e.target.textContent);
                          setIsOpen(false);
                        }}
                        className="px-6 py-2 text-gray-500 hover:bg-gray-100"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
