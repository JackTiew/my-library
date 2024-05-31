import { useEffect, useRef } from 'react';

const RandomCanvasTree = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const drawBranch = (v0, length, thickness, angle) => {
            if (thickness < 5 && Math.random() < 0.3) {
                return;
            }

            if (thickness < 1) {
                ctx.beginPath();
                ctx.arc(...v0, 10, 0, 2 * Math.PI);
                ctx.fillStyle = Math.random() >= 0.5 ? '#FFF' : 'red';
                ctx.fill();

                return;
            }

            ctx.beginPath();
            ctx.moveTo(...v0);

            const v1 = [
                v0[0] + length * Math.cos(((angle) * Math.PI) / 180),
                v0[1] + length * Math.sin(((angle) * Math.PI) / 180),
            ]

            ctx.lineTo(...v1);
            ctx.strokeStyle = '#333';
            ctx.lineWidth = thickness;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Left Branch
            drawBranch(v1, length * 0.8, thickness * 0.8, angle + Math.random() * 30);

            // Right Branch
            drawBranch(v1, length * 0.8, thickness * 0.8, angle - Math.random() * 30);
        };

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        console.log(window.offsetHeight);
        console.log(window.innerWidth);

        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.95;

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(1, -1);

        setInterval(() => {
            ctx.clearRect(0 - canvas.width, 0 - canvas.height, window.innerWidth * 2, window.innerHeight * 2);
            drawBranch([0, -200], 100, 10, 90);
        }, 1000);

    }, []);

    return (
        <div style={{ backgroundColor: '#92B5AD', height: '100dvh' }}>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default RandomCanvasTree