import blog1 from "../../assets/blog/blog1.png";
import blog2 from "../../assets/blog/blog2.png";
import blog3 from "../../assets/blog/blog3.png";
import author1 from "../../assets/serverAbout/ellipse1.png";
import author2 from "../../assets/serverAbout/ellipse2.png";
import author3 from "../../assets/serverAbout/rllipse3.png";

const Blogs = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#777777] font-[Open Sans] font-[400] text-[20px] leading-[32px] my-5">
          Our Blog
        </p>
        <h5 className="text-black align-middle font-[Manrope] font-[400] text-[48px] leading-[72px]">
          Value proposition accelerator product <br /> management venture
        </h5>
      </div>
      <div className="flex justify-between items-center px-5 my-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={blog1} alt="" />
          </a>
          <div className="p-5">
            <p className="mb-3 text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[28px] ">
              Category{" "}
              <span className="text-[#777777] font-[Open Sans] font-[400] text-[16px] leading-[28px]">
                November 22, 2021
              </span>
            </p>
            <h3 className="mb-2 align-middle font-[Open Sans] font-[400] text-[24px] leading-[36px] tracking-tight text-gray-900 ">
              Pitch termsheet backing validation focus release.
            </h3>
            <div className="flex items-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src={author1}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">
                  Harry Potter
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={blog2} alt="" />
          </a>
          <div className="p-5">
            <p className="mb-3 text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[28px] ">
              Category{" "}
              <span className="text-[#777777] font-[Open Sans] font-[400] text-[16px] leading-[28px]">
                November 22, 2021
              </span>
            </p>
            <h5 className="mb-2 align-middle font-[Open Sans] font-[400] text-[24px] leading-[36px] tracking-tight text-gray-900">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </h5>
            <div className="flex items-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src={author2}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">
                  Harry Potter
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow ">
          <a href="#">
            <img className="rounded-t-lg w-full" src={blog3} alt="" />
          </a>
          <div className="p-5">
            <p className="mb-3 text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[28px] ">
              Category{" "}
              <span className="text-[#777777] font-[Open Sans] font-[400] text-[16px] leading-[28px]">
                November 22, 2021
              </span>
            </p>
            <h5 className="mb-2 align-middle font-[Open Sans] font-[400] text-[20px] leading-[32px] tracking-tight text-gray-900">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </h5>
            <div className="flex items-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src={author3}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div className="text-[#0A2640] font-[Open Sans] font-[700] text-[16px] leading-[32px]">
                  Harry Potter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
