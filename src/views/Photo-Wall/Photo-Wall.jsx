import { useEffect, useRef } from 'react';
import './index.scss';

const PhotoWall = () => {

    const ringRef = useRef(null);
    let rotationValue = 0;

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);

        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    const handleWheel = (event) => {
        rotationValue += event.deltaY > 0 ? 10 : -10;
        ringRef.current.style.transform = `rotateY(${rotationValue}deg)`;
    };

    return (
        <div style={{ perspective: '2000px', overflow: 'hidden' }}>
            <div ref={ringRef} className="photoWall-ring">
                <img src='https://picsum.photos/id/21/600' alt='' />
                <img src='https://picsum.photos/id/22/600' alt='' />
                <img src='https://picsum.photos/id/23/600' alt='' />
                <img src='https://picsum.photos/id/24/600' alt='' />
                <img src='https://picsum.photos/id/25/600' alt='' />
                <img src='https://picsum.photos/id/26/600' alt='' />
                <img src='https://picsum.photos/id/27/600' alt='' />
                <img src='https://picsum.photos/id/28/600' alt='' />
                <img src='https://picsum.photos/id/29/600' alt='' />
                <img src='https://picsum.photos/id/30/600' alt='' />
            </div>
        </div>
    )
}

export default PhotoWall