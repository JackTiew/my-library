import { useEffect } from 'react';
import './index.scss';

const BubbleAnimation = () => {

    let intervalId;
    useEffect(() => {
        const createBubbles = () => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const bubbles = document.querySelector('.bubbleAnimation-bubbles');

            for (let child of bubbles.children) {
                setTimeout(() => {
                    child.remove();
                }, 2500);
            }

            let maxBubbleCount = 8;
            for (let i = (Math.random() * maxBubbleCount) + 1; i <= maxBubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubbleAnimation-bubble';
    
                const s = Math.random() * 100 + 50;
                const x = Math.random() * (vw - s);
                const d = Math.random() * 2 + 1;
                bubble.style.setProperty('--x', `${x}px`);
                bubble.style.setProperty('--s', `${s}px`);
                bubble.style.setProperty('--d', `${d}s`);
                bubbles.appendChild(bubble);
            }
        };

        createBubbles();
        intervalId = setInterval(createBubbles, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="bubbleAnimation-footer">
                <div className="bubbleAnimation-bubbles">
                    <div className="bubbleAnimation-bubble"></div>
                </div>
            </div>
            <svg style={{ display: 'none' }}>
                <defs>
                    <filter id='blob'>
                        <feGaussianBlur
                            in='SourceGraphic'
                            stdDeviation='10'
                            result='blur'
                        ></feGaussianBlur>
                        <feColorMatrix
                            in='blur'
                            mode='matrix'
                            values='
                            1  0  0  0  0
                            0  1  0  0  0
                            0  0  1  0  0
                            0  0  0  20  -10'
                        ></feColorMatrix>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default BubbleAnimation