import React from "react";
import TimelineItems from "./TimelineItems";

const Timeline = ({start, end}) => {
    return (
        <div id="timeline">
            <p id="time-start">START</p>
            <TimelineItems/>
            <p id="time-end">END</p>
        </div>
    )
}

export default Timeline