import './index.scss';

const AspectRatio = () => {
    return (
        <div style={{ width: '100dvw', display: 'flex', justifyContent: 'center', marginTop: '20dvh'}} >
            <div className='aspect-ratio-item'>
                <div className="aspect-ratio-inner">
                    <div className="aspect-ratio-container"></div>
                </div>
            </div>
        </div>
    )
}

export default AspectRatio