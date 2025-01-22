import AboutUsAB from "../About-Components/AboutUsAB";
import BannerAb from "../About-Components/BannerAb";
import CasesStatus from "../About-Components/CasesStatus";
import ContactAB from "../About-Components/ContactAB";
import Fairness from "../About-Components/Fairness";
import JusticeAB from "../About-Components/JusticeAB";
import TestimonialAB from "../About-Components/TestimonialAB";
import Trusted from "../About-Components/Trusted";

const About_Route = () => {
    return (
        <div>
           <BannerAb></BannerAb>
           <AboutUsAB></AboutUsAB>
           <CasesStatus></CasesStatus>
           <Fairness></Fairness>
           <TestimonialAB></TestimonialAB>
           <JusticeAB></JusticeAB>
           <ContactAB></ContactAB>
           <Trusted></Trusted>
           
        </div>
    );
};

export default About_Route;