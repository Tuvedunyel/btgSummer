import { useEffect } from 'react';
import greenBush from '../img/green-bush.svg'
import blueBush from '../img/blue-bush.svg';
import orangeRedBush from '../img/orangeRed-bush.svg';
import whiteBush from '../img/white-bush.svg';


import greenBlueLeaf from '../img/greenBlue-leaf.svg';
import orangeBush from '../img/orange-bush.svg';
import whiteLeaf from '../img/white-leaf.svg';
import redLeaf from '../img/red-leaf.svg';
import blueGreenLeaf from '../img/blueGreen-leaf.svg';
import orangeLeaf from '../img/orange-leaf.svg';
import redBush from '../img/red-bush.svg';
import orangeRedBushLeft from '../img/leftbottom.svg';
import anime from "animejs";

const Jungle = () => {

    useEffect( () => {
        anime({
            targets: '.OrangeBush',
            keyframes: [
                { rotate: -4, duration: 2000 },
                { rotate: 4, duration: 1500 },
                { rotate: -10, duration: 4000},
                { rotate: 5, duration: 3500  },
            ],
            direction: 'alternate',
            loop: true,
            easing: 'linear',
        })
        anime({
            targets: '.orangeRedBush',
            keyframes: [
                { rotate: -5, duration: 3000 },
                { rotate: 5, duration: 3500 },
                { rotate: 0, duration: 3000 },
                { rotate: 10, duration: 4000 },
                { rotate: 6, duration: 3000 },
                { rotate: 15, duration: 4300 },
                { rotate: 0, duration: 5000 },
            ],
            loop: true,
            direction: 'alternate',
            easing: "linear"
        });
        anime({
            targets: '.BlueLeaf',
            keyframes: [
                { rotate: -3, duration: 3000 },
                { rotate: 3, duration: 3500 },
                { rotate: 0, duration: 2800 },
                { rotate: 5, duration: 3500 },
                { rotate: 3, duration: 2800 },
                { rotate: 8, duration: 4000 },
                { rotate: 3, duration: 3500 },
                { rotate: 5, duration: 2500 },
            ],
            loop: true,
            direction: 'alternate',
            easing: "linear"
        });
        anime({
            targets: '.redLeaf',
            keyframes: [
                { rotate: -5, duration: 3000 },
                { rotate: 5, duration: 2500 },
                { rotate: 3, duration: 2000 },
                { rotate: 6, duration: 3500 },
                { rotate: 3, duration: 2000 },
                { rotate: 8, duration: 4000 },
                { rotate: -5, duration: 5000 },
            ],
            loop: true,
            direction: 'alternate',
            easing: "linear"
        });
        anime({
            targets: '.blueGreen',
            keyframes: [
                { rotate: -6, duration: 3000 },
                { rotate: 6, duration: 3500 },
                { rotate: 0, duration: 3000 },
                { rotate: -10, duration: 4000 },
                { rotate: 6, duration: 3000 },
                { rotate: -15, duration: 4300 },
                { rotate: 0, duration: 5000 },
                { rotate: 6, duration: 2500 },
                { rotate: -6, duration: 3000 }
            ],
            loop: true,
            direction: 'alternate',
            easing: "linear"
        });
        anime({
            targets: '.redBush',
            keyframes: [
                { rotate: -5, duration: 3000 },
                { rotate: 5, duration: 3500 },
                { rotate: 0, duration: 3000 },
                { rotate: 10, duration: 4000 },
                { rotate: 6, duration: 3000 },
                { rotate: 15, duration: 4300 },
                { rotate: 0, duration: 5000 },
                { rotate: 5, duration: 2500 },
                { rotate: -5, duration: 3000 }
            ],
            loop: true,
            direction: 'alternate',
            easing: "linear"
        })
    }, [] );


    return (
        <div className="jungleContainer">
            <img src={ greenBush } alt="buisson vert"  className="greenBush" />
            <img src={ orangeRedBushLeft } alt="Feuille orange" className="OrangeBush" />
            <img src={ blueBush } alt="Buisson vert" className="blueBush"/>
            <img src={ blueBush } alt="Buisson vert" className="blueBush second"/>
            <img src={ orangeRedBush } alt="Feuille orange" className="orangeRedBush"/>
            <img src={ whiteBush } alt="Feuille blanche" className="whiteBush"/>

            <img src={ greenBlueLeaf } alt="petite feuille bleu" className="BlueLeaf"/>
            <img src={ orangeBush } alt="buisson orange" className="orangeBush"/>
            <img src={ whiteLeaf } alt="petite feuille blanche" className="whiteLeaf"/>
            <img src={ blueBush } alt="Buisson vert" className="blueBush bottomRight"/>
            <img src={ redLeaf } alt="Feuille rouge" className="redLeaf"/>
            <img src={ whiteBush } alt="Feuille blanche" className="whiteBush topRight"/>
            <img src={ blueGreenLeaf } alt="Feuille bleuée" className="blueGreen"/>
            <img src={ whiteBush } alt="Feuille blanche" className="whiteBush topMiddle"/>
            <img src={ orangeLeaf } alt="feuille orangée" className="orangeLeafImg"/>
            <img src={ redBush } alt="Buisson rouge" className="redBush"/>
            <img src={ whiteLeaf } alt="petite feuille blanche" className="whiteLeaf topLeft"/>
        </div>
    );
};

export default Jungle;
