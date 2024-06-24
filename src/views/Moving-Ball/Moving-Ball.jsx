import { useEffect, useRef } from "react"

const MovingBall = () => {

    const ballRef = useRef(null);

    const styles = {
        ball: {
            backgroundColor: 'yellow',
            borderRadius: '50%',
            height: 50,
            width: 50,
            position: 'absolute',
            top: -25,
            left: -25,
        }
    }
    
    useEffect(() => {
        init();

        window.addEventListener('click', e => {
            handleMouseClick(e);
        })

        return () => window.removeEventListener("click", handleMouseClick);
    }, []);

    const init = () => {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        ballRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        moveBall(x, y);
    };

    const moveBall = (x, y) => {
        const rect = ballRef.current.getBoundingClientRect();
        const ballX = rect.x + rect.width / 2;
        const ballY = rect.y + rect.height / 2;

        ballRef.current.getAnimations().forEach(animation => {
            animation.cancel();
        });

        const rad = Math.atan2(y - ballY, x - ballX);
        const deg = (rad * 180 ) / Math.PI;
        ballRef.current.animate(
            [
                {
                    transform: `translate(${ballX}px, ${ballY}px) rotate(${deg}deg)`,
                },
                {
                    transform: `translate(${ballX}px, ${ballY}px) rotate(${deg}deg) scaleX(1.5)`,
                    offset: 0.6,
                },
                {
                    transform: `translate(${x}px, ${y}px) rotate(${deg}deg) scaleX(1.5)`,
                    offset: 0.8,
                },
                {
                    transform: `translate(${x}px, ${y}px) rotate(${deg}deg)`,
                }
            ],
            {
                duration: 1000,
                fill: 'forwards',
            }
        );
    };

    return (
        <div>
            <div ref={ballRef} style={styles.ball}></div>
        </div>
    )
}

export default MovingBall