const DropZone = (props) => {

    const { containerStyle, children } = props;
    const { onDropHandler, onDragOverHandler } = props;

    return (
        <div
            style={containerStyle}
            onDrop={onDropHandler}
            onDragOver={onDragOverHandler}
        >
            {children}
        </div>
    )
}

export default DropZone;