import React from 'react';
import '../assets/css/Sponsers.scss';

const Sponsers: React.FC = () => {
    return (
        <div className='maincontainer'>
            <div className="subcontainer">
                <div className="item">
                    <img 
                        src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" 
                        alt="Sony Logo" 
                        style={{ width: "150px", objectFit: "contain" }} 
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png" 
                        alt="Dell Logo" 
                        style={{ width: "150px", objectFit: "contain" }} 
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" 
                        alt="LG Logo" 
                        style={{ width: "150px", objectFit: "contain" }} 
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png" 
                        alt="Apple Logo" 
                        style={{ width: "150px", objectFit: "contain" }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsers;
