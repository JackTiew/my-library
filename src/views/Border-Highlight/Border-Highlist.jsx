import './index.scss';

const BorderHighlight = () => {

    const handleMouseMove = (event) => {
        const cards = document.querySelectorAll('.border-highlight-card');
        for(const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        }
    };

    return (
        <div className='center'>
            <div onMouseMove={handleMouseMove} className="border-highlight-container">
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        aaaaa aaaaa aaaaa
                    </div>
                </div>
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        bbbbb bbbbb bbbbb
                    </div>
                </div>
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        ccccc ccccc ccccc
                    </div>
                </div>
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        ddddd ddddd ddddd
                    </div>
                </div>
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        eeeee eeeee eeeee
                    </div>
                </div>
                <div className="border-highlight-card">
                    <div className="border-highlight-content">
                        fffff fffff fffff
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BorderHighlight