import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Logo */}
                        <img src={Logo} alt="logo" />
                        {/* Right Section */}
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
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
