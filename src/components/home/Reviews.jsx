import author1 from "../../assets/serverAbout/ellipse1.png";
import author2 from "../../assets/serverAbout/ellipse2.png";
import author3 from "../../assets/serverAbout/rllipse3.png";

const Reviews = () => {
  return (
    <div className="bg-[#0A2640] p-5">
      <h3 className="text-white my-10 ml-24 align-middle font-[Manrope] font-[400] text-[48px] leading-[72px]">An enterprise template to ramp <br /> up your company website</h3>
      <div className="flex justify-evenly items-center gap-2">
        <div className=" p-8 w-[280px] bg-white rounded">
          <div className="mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="text-black font-[Open Sans] font-[400] text-[24px] leading-[32px]">
            “Buyer buzz partner network disruptive non-disclosure agreement business”
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={author1}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">Albus Dumbledore</div>
              <div className="text-[#0A2640] font-[Open Sans] font-[400] text-[14px] leading-[30px]">
              Manager @ Howarts
              </div>
            </div>
          </div>
        </div>
        <div className=" p-8 w-[280px] bg-white rounded">
          <div className="mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="text-black font-[Open Sans] font-[400] text-[24px] leading-[32px]">
            “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={author2}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">Severus Snape</div>
              <div className="text-[#0A2640] font-[Open Sans] font-[400] text-[14px] leading-[30px]">
              Manager @ Slytherin
              </div>
            </div>
          </div>
        </div>
        <div className=" p-8 w-[280px] bg-white rounded">
          <div className="mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="text-black font-[Open Sans] font-[400] text-[24px] leading-[32px]">
            “Release facebook responsive web design business model canvas seed money monetization.”
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={author3}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  text-left">
              <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">Harry Potter</div>
              <div className="text-[#0A2640] font-[Open Sans] font-[400] text-[14px] leading-[30px]">
              Team Leader @ Gryffindor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
