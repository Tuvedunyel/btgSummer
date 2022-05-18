import React from 'react';
import greenBush from '../img/green-bush.svg'
import OrangeLeaf from "./jungleElements/OrangeLeaf";

const Jungle = () => {
    return (
        <div className="jungleContainer">
            <img src={ greenBush } alt="buisson vert"  className="greenBush" />
            <OrangeLeaf />
            {/*<img src={ blueBush } alt="Buisson vert"/>*/}
        </div>
    );
};

export default Jungle;
