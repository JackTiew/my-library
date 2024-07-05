import { useEffect } from "react";

const IntersectionObservers = () => {

    const ob = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                console.log('test');
            }
        }, {
            root: null,
            threshold: 0,
        }
    );

    useEffect(() => {
        const dom = document.querySelector('.observer-loading');
        ob.observe(dom);

        return () => {
            ob.unobserve(dom);
        }
    }, []);

    return (
        <div className='center'>
            <div>
                <div style={{ width: '90dvw', height: '100dvh', background: 'red'}}></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='observer-loading' style={{ width: 100, height: 100, background: 'green'}}></div>
                </div>
            </div>
        </div>
    )
}

export default IntersectionObservers