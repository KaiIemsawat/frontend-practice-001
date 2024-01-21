import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./type";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};
const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="bg-secondary-500 hover:bg-primary-500 rounded-md px-10 py-2 duration-500 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.CONTACT_US)}
            href={`#${SelectedPage.CONTACT_US}`}
        >
            {children}
        </AnchorLink>
    );
};
export default ActionButton;
