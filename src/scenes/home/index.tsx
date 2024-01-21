import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/share/ActionButton";
import { SelectedPage } from "@/share/type";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0"
        >
            {/* Image | Main Header */}
            <div>
                {/* Main Header */}
                <div>
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p>
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                        </p>
                    </div>
                    {/* Actions */}
                    <div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
                            onClick={() =>
                                setSelectedPage(SelectedPage.CONTACT_US)
                            }
                            href={`#${SelectedPage.CONTACT_US}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </div>

            {/* Sponsers */}
            {isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img src={SponsorRedBull} alt="sponser-redbull" />
                            <img src={SponsorForbes} alt="sponser-redbull" />
                            <img src={SponsorFortune} alt="sponser-fortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Home;
