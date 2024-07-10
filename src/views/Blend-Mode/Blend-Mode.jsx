import './index.scss';

// https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
const BlendMode = () => {
    return (
        <div className='center'>
            <div>
                <div className='blendMode-difference-container'>
                    <div className="blendMode-wide-container">
                        <div className='blendMode-difference-text'>
                            I am Groot!
                        </div>
                    </div>
                </div>
                <div className='blendMode-mix'></div>
                <div style={{ position: 'relative' }}>
                    <div className='blendMode-multiply'></div>
                    <img width={700} src='https://media.istockphoto.com/id/1271122894/photo/planet-earth-from-the-space-at-night.webp?b=1&s=170667a&w=0&k=20&c=0hgUHXI4fN1KkYG9uA3utDg7a5rsIBc1POPRVpkfo4E=' alt='' />
                </div>
                <div className='blendMode-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum
                </div>

            </div>
        </div>
    )
}

export default BlendMode