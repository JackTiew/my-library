import './index.scss';

const CardFlip = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25dvh' }}>
            <div className="card-container">
                <div className='card card1'>5</div>
                <div className='card card2'>5</div>
                <div className='card card3'>4</div>
                <div className='card card4'>4</div>
            </div>
            <div className='card-flip-container'>
                <p className='card-flip-front'>
                    I am front
                </p>
                <p className='card-flip-back'>
                    I am back
                </p>
            </div>
        </div>
    )
}

export default CardFlip