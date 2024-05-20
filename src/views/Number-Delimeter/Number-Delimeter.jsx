const NumberDelimeter = () => {

    const numberStr = '10000000000';

    const addDelimeter = (number) => {
        return number.replace(/\B(?=(\d{3})+$)/g, ',');
    };

    return (
        <div>
            {addDelimeter(numberStr)}
        </div>
    )
}

export default NumberDelimeter;