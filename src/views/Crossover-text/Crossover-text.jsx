import { useEffect, useRef } from "react"
import './index.scss';

const CrossoverText = () => {

    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.innerHTML = textRef.current.textContent.split('').map((x, index) => `<span style="z-index: ${textRef.current.textContent.length - index}">${x}</span>`).join('');
    }, []);

    return (
        <div>
            <div style={{ height: '100dvh', width: '100dvw', backgroundColor: '#1E222E', display: 'flex', justifyContent: 'center' }}>
                <h1 ref={textRef} className='crossover-text-overlap'>
                    cross over
                </h1>
            </div>
        </div>
    )
}

export default CrossoverText