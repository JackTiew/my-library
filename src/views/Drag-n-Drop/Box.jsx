const Box = (props) => {

    const { color } = props;

    return (
        <div style={{ height: 50, width: 50, background: color }}></div>
    )
}

export default Box;