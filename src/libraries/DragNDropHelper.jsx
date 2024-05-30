import { v4 as uuidv4 } from 'uuid';

const DragNDropHelper = () => {

    let dragItem = {};
    let dragStartCoordinate = { x: 0, y: 0 };

    const handleDragStart = (event, item) => {
        dragItem = {
            target: event,
            item: item
        }
    };

    const handleMouseDown = (event, isFromInsideContainer) => {
        if (isFromInsideContainer) {
            dragStartCoordinate = {
                x: event.pageX,
                y: event.pageY
            };
        } else {
            dragStartCoordinate = {
                x: event.pageX - event.target.getBoundingClientRect().x,
                y: event.pageY - event.target.getBoundingClientRect().y
            };
        }
    };

    const handleDrop = (event, items) => {
        let moveItem = { ...dragItem.item };

        if (moveItem.id) { // Inside continer
            moveItem.left = moveItem.left + event.pageX - dragStartCoordinate.x;
            moveItem.top = moveItem.top + event.pageY - dragStartCoordinate.y;
        } else { //Outside container
            moveItem.id = uuidv4();
            moveItem.left = event.pageX - dragStartCoordinate.x;
            moveItem.top = event.pageY - dragStartCoordinate.y;
        }

        return ([ ...items.filter(x => x.id !== moveItem.id), moveItem ]);
    };

    const overlapDetection = (event, item) => {
        event.preventDefault();

        if (item.id !== dragItem.item.id) {
            console.log(`${item.id} is overlap by ${dragItem.item.id}!`);

            //https://github.com/react-dnd/react-dnd/issues/779
            //https://material.angular.io/cdk/drag-drop/overview
            //Modify cursor size by image?
        }
    };

    return {
        handleDragStart,
        handleMouseDown,
        overlapDetection,
        handleDrop,
    }
}

export default DragNDropHelper;