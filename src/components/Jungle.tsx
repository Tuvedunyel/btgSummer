import React from 'react';
import greenBush from '../img/green-bush.svg'
import orangeLeaf from '../img/orange-leaf.svg'

const Jungle = () => {
    return (
        <div className="jungleContainer">
            <img src={ greenBush } alt="buisson vert"  className="greenBush" />
            <img src={ orangeLeaf } alt="Feuille orange" className="orangeLeaf" />
        </div>
    );
};

export default Jungle;
