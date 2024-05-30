import { useState } from "react";

import './index.css'

import CommonHelper from "../../libraries/CommonHelper";
import DragNDropHelper from "../../libraries/DragNDropHelper";

import Box from "./Box";
import Drag from "./Drag";
import DropZone from "./DropZone";

const DragNDrop = () => {
    const commonHelper = CommonHelper();
    const { handleDragStart, handleMouseDown, handleDrop, overlapDetection } = DragNDropHelper();

    const presetComponent = [
        { content: `<span>Span Sample</span>` },
        { content: `<div>Div Sample</div>` },
        { content: `<input value='Input Sample' readOnly />` },
        { content: `<button>Button Sample</button>` },
        { content: `<img width=50 height=50 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s' alt='' />` },
    ];

    const [ boxes, setBoxes ] = useState([]);
    const [ displayItems, setDisplayItems ] = useState([]);

    const addBox = () => {
        const box = {
            color: commonHelper.randomColor(),
        };

        setBoxes([ ...boxes, box ]);
    };

    const onDrop = (event) => {
        let newItems = handleDrop(event, displayItems);

        setDisplayItems(newItems);
    };

    return (
        <div>
            <button style={{ margin: 10 }} onClick={() => addBox()}>Add box</button>
            <div style={{ display: 'flex' }}>
                {/* {
                    presetComponent.map((component, index) => (
                        <Drag
                            key={`${index}`}
                            containerClass={`item-container`}
                            onDragStartHandler={(event, component) => handleDragStart(event, component)}
                            onMouseDownHandler={event => handleMouseDown(event, false)}
                        >
                            <div dangerouslySetInnerHTML={{__html: component.content}}></div>
                        </Drag>
                    ))
                } */}
                {
                    boxes.map((box, index) => (
                        <Drag
                            key={`${box.color}${index}`}
                            containerClass={`drag-n-drop-item-container`}
                            onDragStartHandler={(event, component) => handleDragStart(event, component)}
                            onMouseDownHandler={event => handleMouseDown(event, false)}
                        >
                            <Box color={box.color} />
                        </Drag>
                    ))
                }
            </div>
            <DropZone
                containerClass={`drag-n-drop-page`}
                onDropHandler={onDrop}
                onDragOverHandler={event => event.preventDefault()}
            >
                {
                    displayItems.map(item => (
                        <Drag
                            id={`${item.id}`}
                            key={`${item.id}`}
                            containerStyle={{
                                height: 50,
                                width: 50,
                                position: item.top && item.left ? 'absolute' : '',
                                top: item.top || '',
                                left: item.left || '',
                            }}
                            onDragStartHandler={event => handleDragStart(event, item)}
                            onMouseDownHandler={event => handleMouseDown(event, true)}
                            onDragEnterHandler={event => overlapDetection(event, item)}
                        >
                            {item}
                        </Drag>
                    ))
                }
            </DropZone>
        </div>
    )
}

export default DragNDrop;