import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Img import section ----->
import MenSlider from "../../../public/img/Men-Slider.png";
import WoMenSlider from "../../../public/img/WoMen-Slider.png";
import BabySlider from "../../../public/img/Baby-Slider.png";

function AdaptiveHeight() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="flex justify-center items-center gap-x-44">
            <div>
              <h2 className="text-5xl text-gray-900 font-bold">
                Men Collection
              </h2>
              <p className="text-[20px] text-gray-500 mt-2 mb-5">
                Elevate Your Basics With a Touch of Glam.
              </p>
              <button className="text-black  rounded-lg relative h-[40px] w-36 overflow-hidden border  bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white font-semibold  hover:before:left-0 hover:before:w-full ">
                <span className="relative z-10">Shop Now</span>
              </button>
            </div>
            <div>
              <img src={MenSlider} alt="" />
            </div>
          </div>
        </div>

        <div>
          <di className="flex justify-center items-center gap-x-44">
            <div>
              <h2 className="text-5xl text-gray-900 font-bold">
                Women Collection
              </h2>
              <p className="text-[20px] text-gray-500 mt-2 mb-5">
                Elevate Your Basics With a Touch of Glam.
              </p>
              <button className="text-black  rounded-lg relative h-[40px] w-36 overflow-hidden border  bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white font-semibold  hover:before:left-0 hover:before:w-full ">
                <span className="relative z-10">Shop Now</span>
              </button>
            </div>
            <img src={WoMenSlider} alt="" />
          </di>
        </div>

        <div>
          <di className="flex justify-center items-center gap-x-44">
            <div>
              <h2 className="text-5xl text-gray-900 font-bold">
                Baby Collection
              </h2>
              <p className="text-[20px] text-gray-500 mt-2 mb-5">
                Elevate Your Basics With a Touch of Glam.
              </p>
              <button className="text-black  rounded-lg relative h-[40px] w-36 overflow-hidden border  bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white font-semibold  hover:before:left-0 hover:before:w-full ">
                <span className="relative z-10">Shop Now</span>
              </button>
            </div>
            <img src={BabySlider} alt="" />
          </di>
        </div>
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
