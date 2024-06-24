import React from 'react'

const FireText = () => {

    const styles = {
        video: {
            position: 'absolute',
            top: '-65dvh',
        },
        text: {
            fontWeight: 'bold',
            fontSize: '150px',
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignCenter: 'center',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            mixBlendMode: 'screen',
        }
    }

    return (
        <div>
            <div className='container'>
                <video style={styles.video} src='https://cdn.pixabay.com/video/2020/02/29/33072-395456627_large.mp4' alt='' autoPlay={true} muted />
                <div style={styles.text}>三国志</div>
            </div>
        </div>
    )
}

export default FireText