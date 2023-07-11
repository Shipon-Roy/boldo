import service1 from "../../assets/serverAbout/service1.png";
import service2 from "../../assets/serverAbout/service2.png";

import { FaCheckCircle } from "react-icons/fa";
import { FiFeather } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BiSun } from "react-icons/bi";

const ServiceAbout = () => {
  return (
    <div>
      <div className="flex justify-around items-center my-10 px-5">
        <div>
          <img src={service1} alt="" />
        </div>
        <div>
          <h5 className="text-black font-[Manrope] font-[400] text-[36px] leading-[46px]">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </h5>
          <p className="flex items-center gap-3 text-black font-[Open Sans] font-[400] text-[20px] leading-[32px] mt-10">
            <FaCheckCircle /> We connect our customers with the best.
          </p>
          <p className="flex items-center gap-3 text-black font-[Open Sans] font-[400] text-[20px] leading-[32px] my-3">
            <FaCheckCircle /> Advisor success customer launch party.
          </p>
          <p className="flex items-center gap-3 text-black font-[Open Sans] font-[400] text-[20px] leading-[32px] mb-10">
            <FaCheckCircle /> Business-to-consumer long tail.
          </p>
          <button className="bg-[#0A2640] text-white w-[210px] h-[60px] rounded-[56px] border-[2px] font-[Open Sans] font-[700] text-[20px] leading-[28px] mr-5">
            Start Now
          </button>
        </div>
      </div>

      <div className="flex justify-around items-center my-10 px-5">
        <div>
          <h5 className="text-black font-[Manrope] font-[400] text-[36px] leading-[46px]">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </h5>
          <p className="flex items-center gap-3 text-white rounded shadow font-[Open Sans] font-[400] text-[20px] leading-[32px] mt-10 bg-[#0A2640] p-3 ">
            <FiFeather /> We connect our customers with the best.
          </p>
          <p className="flex items-center gap-3 text-black rounded shadow p-3 font-[Open Sans] font-[400] text-[20px] leading-[32px] my-4 bg-gray-100">
            <AiOutlineEye /> Advisor success customer launch party.
          </p>
          <p className="flex items-center gap-3 text-black rounded shadow p-3 font-[Open Sans] font-[400] text-[20px] leading-[32px] bg-gray-100 mb-10">
            <BiSun /> Business-to-consumer long tail.
          </p>
        </div>
        <div>
          <img src={service2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;
