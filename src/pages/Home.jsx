import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Customers from "../components/home/Customers";
import Reviews from "../components/home/Reviews";
import ServiceAbout from "../components/home/ServiceAbout";
import Services from "../components/home/Services";
import Banner from "../components/home/banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ServiceAbout />
            <Reviews />
            <Customers />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;