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
            <div className="mx-auto  w-5/6 items-center justify-center md:flex md:h-5/6">
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="md:before:content-evolvetext before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm md:text-start">
                            Unrivaled Gym. Unparalleled Training Fitness
                            Classes. World Class Studios to get the Body Shapes
                            That you Dream of.. Get Your Dream Body Now.
                        </p>
                    </div>
                    {/* Actions */}
                    <div className="mt-8 flex items-center gap-8">
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
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
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
