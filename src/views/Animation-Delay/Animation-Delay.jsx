import { useRef, useState } from 'react';
import './Animation-Delay.css'

const AnimationComplicatedControl = () => {
    const ballRef = useRef(null);
    const [ rangeValue, setRangeValue ] = useState(0.2);
    const [ meterValue, setMeterValue ] = useState(30);

    return (
        <div>
            <div className='animation-delay-container'>
                <div>
                    <div className='animation-delay-ball' ref={ballRef} style={{ '--delay': `-${rangeValue}s` }} />
                    <input type='range' value={rangeValue} style={{ marginTop: 200 }} onChange={e => setRangeValue(e.target.value)} min='0' max='1' step='0.01' />
                </div>
            </div>
            <div className='center'>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='animation-delay-meter-container' style={{ '--meter-height': `${meterValue}px`}}>
                            <span>{meterValue}</span>
                        </div>
                    </div>
                    <input type='range' value={meterValue / 100} style={{ marginTop: 10 }} onChange={e => setMeterValue(Math.ceil(e.target.value * 100))} min='0' max='1' step='0.01' />
                </div>
            </div>
        </div>
    )
}

export default AnimationComplicatedControl;