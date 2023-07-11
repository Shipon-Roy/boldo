import customers from "../../assets/customers.png";

import { FaCheckCircle } from "react-icons/fa";

const Customers = () => {
    return (
        <div className="py-5">
            <img className="mx-auto my-10" src={customers} alt="" />
            <div className="flex justify-evenly items-center">
                <h3 className="text-black align-middle font-[Manrope] font-[400] text-[36px] leading-[56px]"> We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h3>
                <div>
                    <p className="flex items-center gap-3 text-black font-[Open Sans] font-[400] text-[20px] leading-[32px]">We connect our customers with the best? <FaCheckCircle /></p>
                    <hr className="bg-[#0A2640] h-[2px]" />
                    <p className="flex items-center gap-3 text-black font-[Open Sans] font-[400] text-[20px] leading-[32px] mt-7">Android research & development rockstar? <FaCheckCircle /></p>
                    <hr className="bg-[#0A2640] h-[2px]" />
                </div>
            </div>
        </div>
    );
};

export default Customers;