import React from "react";

const TimelineItems = () => {
    return (
        <>
            <div className='timeline-item' style={{width: '50%'}}>
                <span className="item-start">0</span>
                <div className="bar red"></div>
                <span className="item-end">50</span>
            </div>
            <div className='timeline-item' style={{width: '75%', marginTop: '100px'}}>
                <span className="item-start">0</span>
                <div className="bar blue"></div>
                <span className="item-end">75</span>
            </div>
        </>
    )
}

export default TimelineItems