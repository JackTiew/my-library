import './index.scss';

const GradientBackground = () => {
    return (
        <div>
            <div style={{ height: '100dvh', width: '100dvw', backgroundColor: '#1E222E', display: 'flex', justifyContent: 'center' }}>
                <div className='gradient-background-card'>
                    <div className='gradient-background-center-card'></div>
                </div>
            </div>
        </div>
    )
}

export default GradientBackground