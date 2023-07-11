import services1 from "../../assets/services/services1.png";
import services2 from "../../assets/services/services2.png";
import services3 from "../../assets/services/services3.png";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">
          Our Services
        </p>
        <h3 className="text-black align-middle font-[Manrope] font-[400] text-[48px] leading-[72px]">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h3>
      </div>
      <div className="flex justify-between items-center px-5 my-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={services1} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 align-middle font-[Open Sans] font-[400] text-[24px] leading-[36px] tracking-tight text-gray-900 ">
                Cool feature title
              </h5>
            </a>
            <p className="mb-3 text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] text-gray-700 dark:text-gray-400">
              Learning curve network effects return on investment.
            </p>
            <a href="#">
              <span className="flex items-center gap-3 underline text-[#0A2640] font-[Open Sans] font-[400] text-[20px] leading-[36px]">
                Explore page <HiOutlineArrowNarrowRight />{" "}
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={services2} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 align-middle font-[Open Sans] font-[400] text-[24px] leading-[36px] tracking-tight text-gray-900">
                Even Cool feature
              </h5>
            </a>
            <p className="mb-3 text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] text-gray-700 dark:text-gray-400">
              Learning curve network effects return on investment.
            </p>
            <a href="#">
              <span className="flex items-center gap-3 underline text-[#0A2640] font-[Open Sans] font-[400] text-[20px] leading-[36px]">
                Explore page <HiOutlineArrowNarrowRight />{" "}
              </span>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={services3} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 align-middle font-[Open Sans] font-[400] text-[24px] leading-[36px] tracking-tight text-gray-900">
                Cool feature title
              </h5>
            </a>
            <p className="mb-3 text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] text-gray-700 dark:text-gray-400">
              Learning curve network effects return on investment.
            </p>
            <a href="#">
              <span className="flex items-center gap-3 underline text-[#0A2640] font-[Open Sans] font-[400] text-[20px] leading-[36px]">
                Explore page <HiOutlineArrowNarrowRight />{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
