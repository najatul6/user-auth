import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import Partnership from "../components/Partnership";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Upgrade from "../components/Upgrade";

const Home = () => {
  return (
    <div>
      <Banner />
      <Upgrade/>
      <BlogSection/>
      <Testimonial />
      <Pricing/>
      <Partnership />
    </div>
  );
};

export default Home;
