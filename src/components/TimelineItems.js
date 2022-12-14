import React from "react";

const TimelineItems = ({start, end, finalItems}) => {

    return (
        <>
        <div id="timeline-main">
            {finalItems?.map((item,idx) => 
                <div key={idx} className='timeline-item' style={{width: `${((item.endTime - item.startTime)/(end-start)*100)-0.5}%`, marginTop: `${item.row*40}px`, left:`${(item.startTime - start)/(end-start)*100}%`}}>
                    <div>
                        <span className="item-start">{item.startTime}</span>
                        <span className="item-end">{item.endTime}</span>
                    </div>
                    <div className="bar blue"></div>
                </div>
            )}
        </div>
        </>
    )
}

export default TimelineItems