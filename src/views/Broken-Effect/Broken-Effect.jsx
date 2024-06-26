import { useEffect, useRef } from 'react';
import './index.scss';


import gsap from 'gsap';

const BrokenEffect = () => {

    const turbulenceRef = useRef(null);

    const t1 = new gsap.timeline({
        pasused: true,
        onUpdate() {
            if (turbulenceRef && turbulenceRef.current) {
                turbulenceRef.current.setAttribute('baseFrequency', `0 ${val.value}`);
            }
        }
    });
    const val = { value: 1 };
    
    t1.to(val, {
        value: 0.00001,
        duration: 0.2
    });
    t1.to(val, {
        value: 0.4,
        duration: 0.2
    });

    useEffect(() => {
        t1.play();
        
        setInterval(() => {
            t1.restart();
        }, 1000);
    }, []);

    return (
        <div className='center'>
            <img className='broken-effect-image' src='./sample.jpg' alt='' />
            <svg style={{ display: 'none' }}>
                <defs>
                    <filter
                        id='noise'
                        x='-20%'
                        y='-20%'
                        width='140%'
                        height='140%'
                        filterUnits='objectBoundingBox'
                        primitiveUnits='userSpaceOnUse'
                        colorInterpolationFilters='linearRGB'>
                            <feTurbulence
                                ref={turbulenceRef}
                                type='fractalNoise'
                                baseFrequency='0 0.4'
                                numOctaves='2'
                                seed='2'
                                stitchTiles='stitch'
                                x='0%'
                                y='0%'
                                width='100%'
                                height='100%'
                                result='turbulence1'
                            />
                            <feDisplacementMap
                                in='SourceGraphic'
                                in2='turbulence1'
                                scale='30'
                                xChannelSelector='R'
                                yChannelSelector='G'
                                x='0%'
                                y='0%'
                                width='100%'
                                height='100%'
                                result='displacementMap4'
                            />
                        </filter>
                </defs>
            </svg>
        </div>
    )
}

export default BrokenEffect