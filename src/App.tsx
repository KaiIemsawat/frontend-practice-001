import Navbar from '@/scenes/navbar';
import { useState } from 'react';

enum SelectedPage {
    HOME = 'home',
    BENEFITS = 'banefits',
    OUR_CLASSES = 'ourclasses',
    CONTACT_US = 'contactus',
}

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.HOME,
    );

    return (
        <div className="app bg-gray-20 p-4 pt-2">
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    );
}

export default App;
