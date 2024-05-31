import { v4 as uuidv4 } from 'uuid';
import CommonHelper from './CommonHelper';

const DragNDropHelper = () => {

    const commonHelper = CommonHelper();

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

        if (moveItem.id) { // Inside container
            moveItem.left = moveItem.left + event.pageX - dragStartCoordinate.x;
            moveItem.top = moveItem.top + event.pageY - dragStartCoordinate.y;
        } else { // Outside container
            moveItem.id = uuidv4();
            moveItem.left = event.pageX - dragStartCoordinate.x;
            moveItem.top = event.pageY - dragStartCoordinate.y;
        }

        let borderWidth = {
            top: commonHelper.getNumberOnlyFromString(event.target.style.borderTopWidth),
            right: commonHelper.getNumberOnlyFromString(event.target.style.borderRightWidth),
            bottom: commonHelper.getNumberOnlyFromString(event.target.style.borderBottomWidth),
            left: commonHelper.getNumberOnlyFromString(event.target.style.borderLeftWidth),
        }

        let rect = event.target.getBoundingClientRect();

        let maxCoordinate = {
            left: rect.x + borderWidth.left,
            top: rect.y + borderWidth.top,
            right: rect.x + event.target.offsetWidth - borderWidth.right,
            bottom: rect.y + event.target.offsetHeight - borderWidth.bottom,
        }

        moveItem.width = dragItem.target.target.getBoundingClientRect().width;
        moveItem.height = dragItem.target.target.getBoundingClientRect().height;
        moveItem.right = moveItem.left + moveItem.width;
        moveItem.bottom = moveItem.top + moveItem.height;

        console.log(moveItem.width);

        if (moveItem.left < maxCoordinate.left) {
            moveItem.left = maxCoordinate.left;
        }
        if (moveItem.top < maxCoordinate.top) {
            moveItem.top = maxCoordinate.top;
        }
        if (moveItem.right > maxCoordinate.right) {
            moveItem.left = maxCoordinate.right - moveItem.width;
        }
        if (moveItem.bottom > maxCoordinate.bottom) {
            moveItem.top = maxCoordinate.bottom - moveItem.height;
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