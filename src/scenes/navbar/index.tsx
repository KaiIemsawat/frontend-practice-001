import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/share/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/share/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

    const [isMenuToggled, setIsMenuToggleed] = useState<Boolean>(false);

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Logo */}
                        <img src={Logo} alt="logo" />

                        {/* Right Section */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                {/* Right Section - left prt */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page="Home"
                                    />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page="Benefits"
                                    />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page="Our Classes"
                                    />
                                    <Link
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        page="Contact Us"
                                    />
                                </div>
                                {/* Right Section - right prt */}
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="bg-secondary-500 rounded-full p-2"
                                onClick={() =>
                                    setIsMenuToggleed(!isMenuToggled)
                                }
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="bg-primary-100 fixed bottom-0 right-0 z-40 h-full w-[300px] drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggleed(!isMenuToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Home"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Benefits"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Our Classes"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            page="Contact Us"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
