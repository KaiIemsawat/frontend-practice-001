import Navbar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from './share/type';

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
