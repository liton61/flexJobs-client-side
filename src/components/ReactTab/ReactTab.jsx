import { useState } from 'react';
import './ReactTab.css'
import Web from '../Web/Web';
import Marketing from '../Marketing/Marketing';
import Graphics from '../Graphics/Graphics';

const ReactTab = () => {
    const [activeTab, setActiveTab] = useState('Web Development');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = ['Web Development', 'Digital Marketing', 'Graphics Design'];

    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div>
                {activeTab === 'Web Development' && (
                    <div>
                        <Web></Web>
                    </div>
                )}
                {activeTab === 'Digital Marketing' && (
                    <div>
                        <Marketing></Marketing>
                    </div>
                )}
                {activeTab === 'Graphics Design' && (
                    <div>
                        <Graphics></Graphics>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReactTab;
