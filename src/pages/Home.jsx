import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import Partnership from "../components/Partnership";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Upgrade from "../components/Upgrade";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div>
      <Banner />
      <UserList/>
      <Upgrade/>
      <BlogSection/>
      <Testimonial />
      <Pricing/>
      <Partnership />
    </div>
  );
};

export default Home;
