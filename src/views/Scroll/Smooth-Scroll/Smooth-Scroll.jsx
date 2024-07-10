import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './index.scss';

const SmoothScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pictures = document.querySelectorAll('.smooth-scroll-picture');
        pictures.forEach(pic => {
            gsap.fromTo(pic,
            {
                backgroundPositionY: `-${window.innerHeight / 2}px`,
            },
            {
                backgroundPositionY: `${window.innerHeight / 2}px`,
                ease: 'none',
                scrollTrigger: {
                    triggger: pic,
                    scrub: true,
                }
            });
        })
    }, []);

    const images = [
        'https://picsum.photos/id/21/600',
        'https://picsum.photos/id/22/600',
        'https://picsum.photos/id/23/600',
        'https://picsum.photos/id/24/600',
        'https://picsum.photos/id/25/600',
    ]

    return (
        <div className='center' style={{ marginTop: 0, flexDirection: 'column' }}>
            {
                images.map((image, index) => (
                    <div id={index} className='smooth-scroll-picture' style={{ backgroundImage: `url(${image})` }}></div>
                ))
            }
        </div>
    )
}

export default SmoothScroll