import { useEffect } from 'react';
import './index.scss';

const InfiniteScroll = () => {
    const imgs = [
        './images/wallpaper(1).jpg',
        './images/wallpaper(2).jpg',
        './images/wallpaper(3).jpg',
        './images/wallpaper(4).jpg',
        './images/wallpaper(5).jpg',
    ];
    let curIndex = 0;

    useEffect(() => {
        resetElements();

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('animationend', handleTransitionEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('animationend', handleTransitionEnd);
        }
    }, []);

    const handleWheel = (event) => {
        console.log('test');
        if (!event.deltaY) return;
        if (event.deltaY > 0) {
            document.querySelector('.infiniteScroll-container').className = 'infiniteScroll-container infiniteScroll-scrollDown';
        } else {
            document.querySelector('.infiniteScroll-container').className = 'infiniteScroll-container infiniteScroll-scrollUp';
        }
    };

    const handleTransitionEnd = (event) => {
        if (document.querySelector('.infiniteScroll-container').classList.contains('infiniteScroll-scrollDown')) {
            curIndex = getNextIndex();
        } else {
            curIndex = getPrevIndex();
        }

        document.querySelector('.infiniteScroll-container').className = 'infiniteScroll-container';
        resetElements();
    }

    const getPrevIndex = () => {
        return curIndex === 0 ? imgs.length - 1 : curIndex - 1;
    };

    const getNextIndex = () => {
        return curIndex === imgs.length - 1 ? 0 : curIndex + 1;
    };

    const createImg = (index) => {
        const img = document.createElement('img');
        img.src = imgs[index];
        const div = document.createElement('div');
        div.className = 'infiniteScroll-item'
        div.appendChild(img);
        document.querySelector('.infiniteScroll-container').appendChild(div);
        return div;
    };

    const resetElements = () => {
        document.querySelector('.infiniteScroll-container').innerHTML = '';
        const prevIndex = getPrevIndex();
        const nextIndex = getNextIndex();
        createImg(prevIndex).classList.add('infiniteScroll-prev');
        createImg(curIndex).classList.add('infiniteScroll-cur');
        createImg(nextIndex).classList.add('infiniteScroll-next');
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="infiniteScroll-container"></div>
        </div>
    )
}

export default InfiniteScroll