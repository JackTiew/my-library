import { useEffect } from 'react';
import './index.scss';

const StrokeAnimation = () => {

    const lineWidth = 400;

    useEffect(() => {
        const paths = document.querySelectorAll("[class^=stroke-animation-path]");

        paths.forEach(p => {
            const l = p.getTotalLength() + 1;
            p.style.setProperty('--lineWidth', l)
        })
    }, []);

    return (
        <div className='center'>
            <div>
                <svg className='stroke-animation-icon' width={lineWidth} height='200'>
                    <line className='stroke-animation-path-line' x1='0' y1='50%' x2='50%' y2='50%' />
                </svg>
                <svg className='stroke-animation-icon' width={lineWidth} height='200'>
                    <circle className='stroke-animation-path-circle' cx='50%' cy='50%' r='40' fill='none' />
                </svg>
                <svg className='stroke-animation-icon' width={lineWidth} height='200'>
                    <path className='stroke-animation-path-icon' d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
                        l-67.6-32.22V456.687z"/>
                    <path className='stroke-animation-path-icon' d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
                        c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
                        l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
                        L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"/>
                </svg>
            </div>
        </div>
    )
}

export default StrokeAnimation