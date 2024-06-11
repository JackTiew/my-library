import './index.scss';
import sample from './sample.jpg';

const CSSReflection = () => {
    return (
        <div style={{ height: '100dvh', width: '100dvw', backgroundColor: '#1E222E', display: 'flex', justifyContent: 'center' }}>
            <div>
                <img className='css-reflection-img' src={sample} alt=''/>
            </div>
        </div>
    )
}

export default CSSReflection