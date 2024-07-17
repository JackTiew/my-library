import { useEffect, useRef, useState } from 'react';
import './index.scss';

const AnimatedHeight = () => {

    const contentRef = useRef(null);
    const [ isShowContent, setIsShowContent ] = useState(false);

    useEffect(() => {
        if (isShowContent) {
            contentRef.current.style.height = 'auto';
            const { height } = contentRef.current.getBoundingClientRect();
            contentRef.current.style.height = 0;
            contentRef.current.getBoundingClientRect();
            contentRef.current.style.height = `${height}px`;
        } else {
            contentRef.current.style.height = 0;
        }
    }, [isShowContent]);

    return (
        <div className='center'>
            <div style={{ width: 300 }}>
                <button onClick={() => setIsShowContent(prev => !prev)}>
                    Click Me!
                </button>
                <div ref={contentRef} className='animated-height-content'>
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

export default AnimatedHeight