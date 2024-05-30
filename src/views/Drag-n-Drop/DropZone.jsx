const DropZone = (props) => {

    const { containerClass, children } = props;
    const { onDropHandler, onDragOverHandler } = props;

    return (
        <div
            className={containerClass}
            onDrop={onDropHandler}
            onDragOver={onDragOverHandler}
        >
            {children}
        </div>
    )
}

export default DropZone;