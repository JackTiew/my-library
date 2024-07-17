import { useEffect, useState } from "react";

const VortexArray = () => {

    const [ displayArray, setDisplayArray ] = useState([]);

    useEffect(() => {
        const generatedArray = createVortexArray(7, 4);
        console.log(generatedArray);
        setDisplayArray(generatedArray);
    }, []);

    const createVortexArray = (row, col) => {
        const isBlock = () => {
            return !nums[indexRow + stepRow] || nums[indexRow + stepRow][indexCol + stepCol] !== 0;
        };

        const nums = new Array(row).fill(0).map(() => new Array(col).fill(0));
        let stepRow = 0;
        let stepCol = 1;
        let indexRow = 0;
        let indexCol = 0;
        let count = 1;

        while (true) {
            nums[indexRow][indexCol] = count++;

            if (isBlock()) {
                //Recalculate stepRow and stepCol
                if(stepRow === 0) { //horizontal
                    stepRow = stepCol;
                    stepCol = 0;
                } else { //vertical
                    stepCol = -stepRow;
                    stepRow = 0;
                }

                if (isBlock()){
                    break;
                }
            }

            indexRow += stepRow;
            indexCol += stepCol;
        }
        return nums;
    };

    const formatArray = (array) => {
        return array.map((subArray, index) => (
            <div key={index}>{subArray.join(' ')}</div>
        ));
    }

    return (
        <div className='vortex-array-container'>{formatArray(displayArray)}</div>
    )
}

export default VortexArray