import Slider from "react-slick";
import bn1 from "../../assets/banner/b1.png";
import bn2 from "../../assets/banner/b2.png";
import bn3 from "../../assets/banner/b3.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

const Banner = () => {
  var settings = {
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  };
  return (
    <div className="bg-[#0A2640]">
      <div className=" flex justify-around items-center p-5">
        <div>
          <h5 className="text-white font-[Manrope] font-[400] text-[48px] leading-[72px]">
            Save time by building <br /> fast with Boldo Template{" "}
          </h5>
          <p className="text-[#F1F1F1] font-[Open Sans] font-[400] text-[16px] leading-[28px] my-4">
            Funding handshake buyer business-to-business metrics iPad
            partnership.
            <br /> First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <button className="bg-[#65E4A3] text-[#0A2640] w-[247px] h-[60px] rounded-[56px] border-[2px] font-[Open Sans] font-[700] text-[20px] leading-[28px] mr-5">
            Buy template
          </button>
          <button className="text-white w-[187px] h-[60px] rounded-[56px] border-white border-[2px] font-[Open Sans] font-[700] text-[20px] leading-[28px]">
            Explore
          </button>
        </div>
        <div>
          <img src={bn1} alt="" />
          <div className="flex gap-5 mt-5">
            <img className="rounded" src={bn2} alt="" />
            <img src={bn3} alt="" />
          </div>
        </div>
      </div>
     <div className="py-10">
     <Slider {...settings} className="w-[850px] m-auto">
      <div>
        <img className="w-[145px] h-[42px] top-[-4.55px] left-[403.38px]" src={logo1} alt="" />
      </div>
      <div>
      <img src={logo2} alt="" />
      </div>
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
      <img src={logo2} alt="" />
      </div>
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
      <img src={logo2} alt="" />
      </div>
    </Slider>
     </div>
    </div>
  );
};

export default Banner;
