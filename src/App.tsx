import { useEffect, useState } from "react";
import { SelectedPage } from "./share/type";

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.HOME,
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); //

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.HOME);
            } else {
                setIsTopOfPage(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="app bg-gray-20 pt-2" // p-4
        >
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
