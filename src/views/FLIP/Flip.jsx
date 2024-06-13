import { useState, useEffect } from "react";
import './index.scss';
import CommonHelper from "../../libraries/CommonHelper";

const Flip = () => {

    const commonHelper = CommonHelper();
    const items = [ 'apple', 'banana', 'grape', 'dragonfruit', 'watermelon', 'durian']
    const [ itemArray, setItemArray ] = useState(items);
    const [ startCoor, setStartCoor ] = useState([0, 0, 0, 0, 0, 0]);
    const [ isAutoFlipping, setIsAutoFlipping ] = useState(false);

    useEffect(() => {
        const doWork = async() => {
            if (itemArray) {

                //Remove the transition property if previous being assigned
                const allItems = document.getElementsByClassName('flip-item');
                Array.from(allItems).forEach(item => {
                    item.style.removeProperty('transition');
                });

                items.forEach(async(item, index) => {
                    let selectedItem = document.getElementById(item);
                    const dis = startCoor[index] - getLocation(selectedItem);

                    if (startCoor[index] !== 0 && dis !== 0) {
                        selectedItem.style.transform = `translateY(${dis}px)`;
                        
                        await commonHelper.delay(1);
                        selectedItem.style.transition = 'transform 0.5s';
                        selectedItem.style.removeProperty('transform');
                    }
                });
            }
        };

        doWork();
    }, [ itemArray ]);

    useEffect(() => {
        if (isAutoFlipping) {
            var intervalId = setInterval(() => {
                onFlip();
            }, 1000);
        }

        return(() => {
            clearInterval(intervalId)
        })
    }, [ isAutoFlipping ]);

    const onFlip = async() => {
        let tempArray = itemArray;
        let tempCoor = [];

        items.forEach(item => {
            let selectedItem = document.getElementById(item);
            tempCoor.push(getLocation(selectedItem));
        });
        setStartCoor([...tempCoor]);

        shuffle(tempArray);
        setItemArray([...tempArray]);
    };

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const getLocation = (item) => {
        const rect = item.getBoundingClientRect();
        return rect.top;
    }

    return (
        <div className='center'>
            <div style={{ width: '20dvw' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={onFlip}>FLIP Items</button>
                    <button onClick={() => setIsAutoFlipping(prev => !prev)}>{isAutoFlipping ? 'Stop Auto Flipping' : 'Auto Flip'}</button>
                </div>
                <ul>
                    {
                        itemArray.map((item, index) => (
                            <li id={item} className='flip-item' key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Flip