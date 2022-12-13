import React from "react";

const TimelineItems = ({start, end, finalItems}) => {

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
            {finalItems?.map((item,idx) => 
                <div key={idx} className='timeline-item' style={{width: `${(item.endTime - item.startTime)/(end-start)*100}%`, marginTop: `${item.row*40}px`, left:`${(item.startTime - start)/(end-start)*100}%`}}>
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