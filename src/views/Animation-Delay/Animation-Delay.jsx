import { useRef, useState } from 'react';
import './Animation-Delay.css'

const AnimationComplicatedControl = () => {
    const ballRef = useRef(null);
    const [ rangeValue, setRangeValue ] = useState(1);

    return (
        <div className='animation-delay-container'>
            <div>
                <div className='animation-delay-ball' ref={ballRef} style={{ '--delay': `-${rangeValue}s` }} />
                <input type='range' style={{ marginTop: 200 }} onChange={e => setRangeValue(e.target.value)} min='0' max='1' step='0.01' />
            </div>
        </div>
    )
}

export default AnimationComplicatedControl;