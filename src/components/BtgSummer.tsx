import { FC } from "react";
import "./sass/BtgSummer.scss";
import SvgMorphe from "./SvgMorphe";
import logo from "../img/logo-summer_4.gif";
import orangeBlueBushLeaf from '../img/orangeBlue-bushLeaf.svg';
import Jungle from "./Jungle";
import orangeGreenLeaf from '../img/orangeGreen-leaf.svg';

const BtgSummer: FC = () => {
    return (
        <div className="btgSummer">
            <div className="btgSummer__container">
                <SvgMorphe/>
                <img src={ logo } alt="BTG Communication agence de communication à 360" className="logo"/>
                <img src={ orangeBlueBushLeaf } alt="Plante verte et orange" className="planteVerteOrange"/>
                <img src={ orangeGreenLeaf } alt="petite feuille orange" className="littleOrangeLeaf"/>
                <Jungle  />
            </div>
        </div>
    );
};

export default BtgSummer;
