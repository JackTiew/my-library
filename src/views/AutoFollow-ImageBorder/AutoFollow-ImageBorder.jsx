import { useEffect, useRef } from 'react';
import './index.scss';

const AutoFollowImageBorder = () => {

    const pointerRef = useRef(null);

    useEffect(() => {
        const imgs = document.querySelectorAll('.autoFollowImageBorder-container img');

        for (const img of imgs) {
            img.onmouseenter = () => {
                pointerRef.current.style.setProperty('--s', `${img.offsetWidth}px`);
                pointerRef.current.style.setProperty('--x', `${img.offsetLeft}px`);
                pointerRef.current.style.setProperty('--y', `${img.offsetTop}px`);
                pointerRef.current.style.setProperty('display', 'block');
            }
        }
    }, []);

    return (
        <div className='center'>
            <div className="autoFollowImageBorder-container">
                <div ref={pointerRef} className="autoFollowImageBorder-pointer"></div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
                <div className="autoFollowImageBorder-item">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />
                </div>
            </div>
        </div>
    )
}

export default AutoFollowImageBorder