import { useRef } from 'react';
import './index.scss';

const ImagePopOnMouseEnter = () => {
    const containerRef = useRef(null);

    const handleMouseEnter = (event) => {
        const rect = containerRef.current.getBoundingClientRect();
        const theta = Math.atan2(rect.height, rect.width);

        const w = event.nativeEvent.offsetX - rect.width / 2;
        const h = rect.height / 2 - event.nativeEvent.offsetY;
        const angle = Math.atan2(h, w);

        if (angle < theta && angle >= -theta) {
            containerRef.current.classList.add('mouseenter-image-right');
            console.log('right');
        } else if (angle < -theta && angle >= -Math.PI + theta) {
            containerRef.current.classList.add('mouseenter-image-bottom');
            console.log('bottom');
        } else if (angle < Math.PI - theta && angle >= theta) {
            containerRef.current.classList.add('mouseenter-image-top');
            console.log('top');
        } else { // Got issue here
            containerRef.current.classList.add('mouseenter-image-left');
            console.log('left');
        }
    };

    const handleMouseLeave = (event) => {
        containerRef.current.className = 'mouseenter-image-container';
    };

    return (
        <div className='center'>
            <div ref={containerRef} className="mouseenter-image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        </div>
    )
}

export default ImagePopOnMouseEnter