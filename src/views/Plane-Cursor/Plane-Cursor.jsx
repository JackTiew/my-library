import './index.scss';
import arrow from './arrow.png';
import { useEffect, useRef } from 'react';

const PlaneCursor = () => {

    const pointRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    let rad = 0;
    let prevCoordinate = {
        x: 0,
        y: 0
    }
    const handleMouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // const mx = event.movementX;
        // const my = event.movementY;
        // if (Math.abs(mx) + Math.abs(my) < 3) return;

        const mx = x - prevCoordinate.x;
        const my = y - prevCoordinate.y;

        if (Math.abs(mx) + Math.abs(my) < 7) return;
        rad = Math.atan2(mx, -my);

        pointRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${rad}rad)`;

        prevCoordinate.x = x;
        prevCoordinate.y = y;
    };

    return (
        <div style={{ cursor: 'none' }}>
            <div style={{ height: '100dvh', width: '100dvw', backgroundColor: '#1E222E' }}>
                <div ref={pointRef} className='plane-cursor-pointer'>
                    <img style={{ width: '100%', height: '100%', marginTop: -8 }} src={arrow} alt='' />
                </div>
            </div>
        </div>
    )
}

export default PlaneCursor