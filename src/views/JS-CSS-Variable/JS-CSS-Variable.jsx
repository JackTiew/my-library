import { useEffect, useRef, useState } from 'react';
import './JS-CSS-Variable.scss';

const JSCSSVariable = () => {

    const containerRef = useRef(null);

    const [ containerWidth, setContainerWidth ] = useState(0);

    useEffect(() => {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
        console.log(containerRef.current.getBoundingClientRect().width);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25dvh' }}>
            <div ref={containerRef} className='js-css-variable-container'>
                <div className='js-css-variable-ball' style={{ '--w': `${containerWidth}px` }}></div>
            </div>
        </div>
    )
}

export default JSCSSVariable