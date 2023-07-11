const Contact = () => {
  return (
    <div className="my-10">
      <div className="bg-[#0A2640] w-[1200px] h-[351px] mx-auto rounded-lg text-center">
        <h5 className="text-white  align-middle font-[Manrope] font-[400] text-[45px] leading-[72px] p-5">
          An enterprise template to ramp <br /> up your company website
        </h5>
        <div className="my-5">
        <input
          className="bg-white pl-5 text-[#0A2640] w-[370px] h-[56px] top-[261px] left-[298px] rounded-[240px]"
          type="text"
          placeholder="Your email address"
        />
        <button className="bg-[#65E4A3] ml-4 border-none text-white w-[210px] h-[60px] rounded-[56px] border-[2px] font-[Open Sans] font-[700] text-[20px] leading-[28px] mr-5">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
