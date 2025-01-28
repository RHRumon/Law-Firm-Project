import BannerService from "./bannerService";
import ContactService from "./ContactService";
import JusticeService from "./JusticeService";
import PracticeService from "./PracticeService";
import TrustedService from "./TrustedService";

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