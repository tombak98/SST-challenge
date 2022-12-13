import React from "react";
import TimelineItems from "./TimelineItems";

const Timeline = ({start, end, finalItems}) => {
    return (
        <div id="timeline">
            <p id="time-start">START</p>
            <TimelineItems finalItems={finalItems} start={start} end={end}/>
            <p id="time-end">END</p>
        </div>
    )
}

export default Timeline