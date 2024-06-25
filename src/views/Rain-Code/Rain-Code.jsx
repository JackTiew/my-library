import { useEffect, useRef } from 'react'
import CommonHelper from '../../libraries/CommonHelper';

const RainCode = () => {
    const commonHelper = CommonHelper();
    const canvasRef = useRef(null);

    useEffect(() => {
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            for(let i = 0; i < columnCount; i++) {
                const char = commonHelper.randomString(1);
                ctx.fillStyle = commonHelper.randomColor();
                ctx.font = `${fontSize}px "Roboto Mono`;

                const x = columnWidth * i;
                const index = nextChar[i];
                const y = (index + 1) * fontSize;
                ctx.fillText(char, x, y);

                if ( y > height && Math.random() > 0.99) {
                    nextChar[i] = 0;
                } else {
                    nextChar[i]++;
                }
            }
        }; 

        const cvs = canvasRef.current;

        const width = window.innerWidth;
        const height = window.innerHeight - 5;

        cvs.width = width;
        cvs.height = height;

        const ctx = cvs.getContext('2d');
        const fontSize = 20 * devicePixelRatio;
        const columnWidth = fontSize;
        const columnCount = Math.floor(width / columnWidth);

        const nextChar = new Array(columnCount).fill(0);

        setInterval(draw, 40);
    }, []);

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default RainCode