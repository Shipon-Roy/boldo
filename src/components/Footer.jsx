import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="h-[360px]">
      <div className="flex justify-around items-center">
        <div>
          <h1 className="flex items-center text-[#0A2640] font-[Manrope] font-[700] text-[43.25px] leading-[33.64px]">
            <img src={logo} alt="" />
            Boldo
          </h1>
          <p className="text-black font-[Open Sans] font-[400] text-[16px] leading-[28px] my-5">
            Social media validation business model <br /> canvas graphical user
            interface launch <br /> party creative facebook iPad twitter.
          </p>
        </div>
        <div>
          <h3 className="text-black font-[Open Sans] font-[700] text-[20px] leading-[32px] my-5">Landings</h3>
          <ul>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Home</li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Products</li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-[Open Sans] font-[700] text-[20px] leading-[32px] my-5">Company</h3>
          <ul>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Home</li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">
              Careers{" "}
              <span className="w-[72px] p-1 h-[30px] top-[241px] left-[911px] rounded-[120px] bg-[#65E4A3] text-black font-[Open Sans] font-[700] text-[13px] leading-[28px]">
                Hiring!
              </span>
            </li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-[Open Sans] font-[700] text-[20px] leading-[32px] my-5">Resources</h3>
          <ul>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Blog</li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Products</li>
            <li className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">Services</li>
          </ul>
        </div>
      </div>
      <p className="text-[#777777] font-[Open Sans] font-[400] text-[16px] leading-[28px] my-5 ml-20">All rights reserved.</p>
    </div>
  );
};

export default Footer;
