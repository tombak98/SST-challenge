import React from "react";

const TimelineItems = () => {

    const objects = [
        {
            startTime: 0,
            endTime: 50,
            row: 0
        },
        {
            startTime: 55,
            endTime: 65,
            row: 0,
        },
        {
            startTime: 5,
            endTime: 75,
            row: 1
        }
    ]

    return (
        <>
        <div id="timeline-main">
            {objects.map((item) => 
                <div className='timeline-item' style={{width: `${item.endTime - item.startTime}%`, marginTop: `${item.row*40}px`, left:`${item.startTime}%`}}>
                    <div>
                        <span className="item-start">{item.startTime}</span>
                        <span className="item-end">{item.endTime}</span>
                    </div>
                    <div className="bar green"></div>
                </div>
            )}
        </div>
        </>
    )
}

export default TimelineItems