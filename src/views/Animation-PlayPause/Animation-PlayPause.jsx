import './Animation-PlayPause.css'

const AnimationPlayPause = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Hover ball to pause</h1>
            <div className='play-pause-ball' />
        </div>
    )
}

export default AnimationPlayPause;