import { useEffect } from 'react';
import './index.scss';

const SudokuImage = () => {

    useEffect(() => {
        const items = document.querySelectorAll('.sudoku-image-item');
        
        for (let i = 0; i < items.length; i++) {
            const r = Math.floor(i / 3);
            const c = i % 3;

            const bgX = -c * 100 + '%';
            const bgY = -r * 100 + '%';
            const disX = (c - 1) * 20 + 'px';
            const disY = (r - 1) * 20 + 'px'
            items[i].style.setProperty('--bgX', bgX);
            items[i].style.setProperty('--bgY', bgY);
            items[i].style.setProperty('--disX', disX);
            items[i].style.setProperty('--disY', disY);
        }
    }, []);

    return (
        <div className='center'>
            <div className="sudoku-image-container">
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
                <div className="sudoku-image-item"></div>
            </div>
        </div>
    )
}

export default SudokuImage