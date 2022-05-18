import { useEffect } from "react";
import wave from "../img/vague-fond.svg";
import anime from "animejs";

const Wave = () => {

    useEffect( () => {
        anime({
            targets: '#wave',
            points: [
                { value: '144.8,0.5 144.8,0.5 144.8,0.5' },
                { value: '144.8,0.5 144.8,0.5 144.8,0.5' },
                { value: '144.8,0.5 144.8,0.5 144.8,0.5' },
                { value: '144.8,0.5 144.8,0.5 144.8,0.5' },
                { value: '144.8,0.5 144.8,0.5 144.8,0.5' },
            ],
            easing: 'linear',
            duration: 2000,
            loop: true
        });
    }, [])

  return (
    <div className="wave-container">
      <img src={wave} alt="Vague fond" id="wave" />
    </div>
  );
};

export default Wave;
