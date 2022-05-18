import { FC } from "react";
import "./sass/BtgSummer.scss";
import SvgMorphe from "./SvgMorphe";
import logo from "../img/logo.svg";
import Jungle from "./Jungle";

const BtgSummer: FC = () => {
    return (
        <div className="btgSummer">
            <div className="btgSummer__container">
                <SvgMorphe/>
                <img src={ logo } alt="BTG Communication agence de communication à 360" className="logo"/>
                <Jungle  />
            </div>
        </div>
    );
};

export default BtgSummer;
