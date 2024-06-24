import { useRef } from 'react';
import './index.scss';

const CardTilt = () => {

    const cardRef = useRef(null);
    const range = [-10, 10];

    const handleMouseMove = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const { offsetWidth, offsetHeight } = cardRef.current;

        const ry = -getRotateDeg(range, offsetX, offsetWidth);
        const rx = getRotateDeg(range, offsetY, offsetHeight);
        cardRef.current.style.setProperty('--rx', `${rx}deg`);
        cardRef.current.style.setProperty('--ry', `${ry}deg`);
    };

    const handleMouseLeave = () => {
        cardRef.current.style.setProperty('--rx', '0deg');
        cardRef.current.style.setProperty('--ry', '0deg');
    };

    const getRotateDeg = (range, value, length) => {
        return (value / length) * (range[1] - range[0]) + range[0];
    };

    return (
        <div className='card-tilt-container'>
            <div ref={cardRef} className='card-tilt-card' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></div>
        </div>
    )
}

export default CardTilt