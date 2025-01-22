import BannerService from "../Service-Components/bannerService";
import ContactService from "../Service-Components/ContactService";
import JusticeService from "../Service-Components/JusticeService";
import PracticeService from "../Service-Components/PracticeService";
import TrustedService from "../Service-Components/TrustedService";

const Service_Route = () => {
    return (
        <div>
            <BannerService></BannerService>
            <PracticeService></PracticeService>
            <TrustedService></TrustedService>
            <ContactService></ContactService>
            <JusticeService></JusticeService>
        </div>
    );
};

export default Service_Route;