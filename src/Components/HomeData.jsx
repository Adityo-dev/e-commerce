// Slider import section ----->
import AdaptiveHeight from "./Slider/Slider";

// Img import section ----->
import Fromalwear from "../../public/img/Suits & Fromalwear.png";
import Gowns from "../../public/img/Tops & Gowns.png";
import Countdown from "../../public/img/Countdown_banner_4_570x.png";
import HomeBastSellingNav from "./BastSelling/HomeBastSelling/HomeBastSellingNav";

const HomeData = () => {
  return (
    <div>
      {/* Home All content ------------------------------->*/}
      <main>
        {/* Slider section --------------------> */}
        <section className="bg-gray-200 rounded-3xl w-[1500px] mx-auto">
          <AdaptiveHeight />
        </section>

        {/*  section 2 --------------------> */}
        <section>
          <div className="flex gap-12 justify-center mt-32">
            <div className="flex justify-center items-center bg-gray-200 rounded-lg ps-12 py-5 gap-2 lg:gap-12 h-[350px] w-[570px]">
              <div>
                <h2 className="text-[2rem]  text-gray-900   mb-5 ">
                  Suits & Fromalwear
                </h2>
                <button className="text-black  rounded-lg relative h-[40px] w-36 overflow-hidden border  bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white font-semibold  hover:before:left-0 hover:before:w-full ">
                  <span className="relative z-10">Shop Now</span>
                </button>
              </div>
              <img className="w-[40%]" src={Fromalwear} alt="" />
            </div>

            <div className="flex justify-center items-center bg-gray-200 rounded-lg ps-12 overflow-hidden   gap-2 lg:gap-12 h-[350px] w-[570px] ">
              <div>
                <h2 className="text-[2rem]  text-gray-900   mb-5 ">
                  Tops & Gowns
                </h2>
                <button className="text-black  rounded-lg relative h-[40px] w-36 overflow-hidden border  bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white font-semibold  hover:before:left-0 hover:before:w-full ">
                  <span className="relative z-10">Shop Now</span>
                </button>
              </div>
              <img className="w-[40%] " src={Gowns} alt="" />
            </div>
          </div>
        </section>

        {/* Best Selling section --------------------> */}
        <section className="mt-28 w-[1250px] mx-auto">
          <HomeBastSellingNav />
        </section>

        {/* Best Offer  -------------------->  */}

        <section>
          <div className="flex justify-center items-center gap-12 bg-gray-200  mt-32">
            <div>
              <h1 className="text-5xl">
                Best Offer - Up to <span className="text-sky-700">50%</span>
              </h1>
              <p>
                Explore our latest New Arrivals & unlock discounts of up to 50%
                off!
              </p>
            </div>
            <div>
              <img src={Countdown} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeData;
