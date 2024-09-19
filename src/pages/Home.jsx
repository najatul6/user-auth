import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import Jumbotron from "../components/Jumbotron";
import Partnership from "../components/Partnership";
import Pricing from "../components/Pricing";
import StatusTable from "../components/StatusTable";
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
      <StatusTable/>
      <Jumbotron/>
    </div>
  );
};

export default Home;
