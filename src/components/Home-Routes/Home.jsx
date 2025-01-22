import AboutUS from "../Home-Components/AboutUS";
import Banner from "../Home-Components/Banner";
import CaseStudy from "../Home-Components/CaseStudy";
import Contact from "../Home-Components/Contact";
import Faq from "../Home-Components/Faq";
import Justice from "../Home-Components/Justice";
import NewsBlog from "../Home-Components/NewsBlog";
import Practice from "../Home-Components/Practice";
import Testimonial from "../Home-Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUS></AboutUS>
      <Practice></Practice>
      <Justice></Justice>
      <Testimonial></Testimonial>
      <CaseStudy></CaseStudy>
      <Faq></Faq>
      <Contact></Contact>
      <NewsBlog></NewsBlog>
    </div>
  );
};

export default Home;
