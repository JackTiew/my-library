import { useEffect, useRef } from 'react';
import './index.scss';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GSAP = () => {

    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(
            ballRef.current,
            {
                x: 0,
                rotate: 0,
            },
            {
                x(_, target) {
                    return document.documentElement.clientWidth - target.offsetWidth;
                },
                rotate: 360,
                duration: 2,
                ease: 'none',
                scrollTrigger: {
                    trigger: ballRef.current,
                    scrub: true,
                    pin: true,
                    start: 'center center',
                }
            }
        )
    }, []);
    
    return (
        <div>
            <div ref={ballRef} className="gsap-ball"></div>
        </div>
    )
}

export default GSAP