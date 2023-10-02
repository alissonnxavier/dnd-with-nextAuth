import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import move from 'lodash-move'

const CARD_COLORS = ["#746474", "#747474"];
const CARD_OFFSET = 0.001;
const SCALE_FACTOR = 0.01;

const CardStack = ({ data }) => {
    const [images, setImages] = React.useState(CARD_COLORS);
    const moveToEnd = from => {
        setImages(move(images, from, images.length - 1));
    };

    return (
        <div style={wrapperStyle} className="flex justify-center items-center">
            <ul style={cardWrapStyle} className="flex items-center justify-center">
                {images.map((color, index) => {
                    const canDrag = index === 0;

                    return (
                        <motion.li
                            key={color}
                            style={{
                                ...cardStyle,
                                backgroundColor: color,
                                cursor: canDrag ? "grab" : "auto",

                            }}

                            animate={{
                                top: index * -CARD_OFFSET,
                                scale: 0.3 - index * SCALE_FACTOR,
                                zIndex: CARD_COLORS.length - index
                            }}
                            drag={canDrag ? "y" : false}
                            dragConstraints={{
                                top: 0,
                                bottom: 0
                            }}
                            onDragEnd={() => moveToEnd(index)}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
const wrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

};

const cardWrapStyle = {
    position: "relative",

};

const cardStyle = {
    borderRadius: '25%',
    position: "absolute",
    width: '600px',
    height: '400px',
    borderRadius: "8px",
    transformOrigin: "top center",
    listStyle: "none"
};

export default CardStack;
