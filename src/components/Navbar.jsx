import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center py-3 px-5">
      <h1 className="flex items-center text-white font-[Manrope] font-[700] text-[43.25px] leading-[33.64px]">
        <img src={logo} alt="" />
        Boldo
      </h1>
      <div className="flex items-center gap-5 ">
        <ul className="text-white flex gap-3">
          <li className="font-[Open Sans] font-[600] text-[16px] leading-[28px]">
            Products
          </li>
          <li className="font-[Open Sans] font-[600] text-[16px] leading-[28px]">
            Services
          </li>
          <li className="font-[Open Sans] font-[600] text-[16px] leading-[28px]">
            About
          </li>
        </ul>
        <button className="bg-white rounded-full border-[2px] text-[#0A2640] w-[128px] h-[40px] font-[Open Sans] font-[700] text-[16px] leading-[28px]">
          Lig In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
