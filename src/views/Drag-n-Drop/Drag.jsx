import { useState } from "react";

const Drag = (props) => {

    let { children, containerClass, containerStyle, id } = props;
    const { onDragStartHandler, onMouseDownHandler, onDragEnterHandler } = props;

    const [ isDragging, setIsDragging ] = useState(false);

    const handleDrag = (event) => {
        setIsDragging(true);
        onDragStartHandler && onDragStartHandler(event, children);
    };

    if (isDragging) {
        containerStyle = { ...containerStyle, border: '1px dotted red'};
    }

    return (
        <>
            <div
                id={id}
                draggable
                className={containerClass}
                style={containerStyle}
                onDragStart={handleDrag}
                onDragEnd={() => setIsDragging(false)}
                onMouseDown={onMouseDownHandler}
                onDragEnter={onDragEnterHandler}
            >
                {children}
            </div>
        </>
    )
}

export default Drag;