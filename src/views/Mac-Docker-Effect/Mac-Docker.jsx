import { useRef } from 'react';

import CurveHelper from '../../libraries/CurveHelper';
import './index.scss'

const MacDocker = () => {
    
    const dockerContainerRef = useRef(null);
    const curveHelper = CurveHelper();
    const range = 300;
    const maxScale = 1.8;

    const handleMouseMove = (event) => {
        const curve = curveHelper.createCurve(range, event.clientX, 1, maxScale);
        layout(curve);
    };

    const handleMouseLeave = () => {
        layout(() => 1);
    };

    const layout = (curve) => {
        const items = dockerContainerRef.current.children;

        for (const item of items) {
            const rect = item.getBoundingClientRect();
            const x = rect.x + rect.width / 2;
            const scale = curve(x);
            item.style.setProperty('--i', scale);
        }
    }

    return (
        <div className='center'>
            <div ref={dockerContainerRef} className="mac-docker-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
                <div className='mac-docker-item'></div>
                <div className="mac-docker-gap"></div>
            </div>
        </div>
    )
}

export default MacDocker