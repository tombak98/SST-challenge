import React from "react";

const TimelineItems = () => {
    return (
        <>
        <div id="timeline-main">
            <div className='timeline-item' style={{width: '50%', marginTop: '0'}}>
                <div>
                    <span className="item-start">0</span>
                    <span className="item-end">50</span>
                </div>
                <div className="bar red"></div>
            </div>
        </div>
        </>
    )
}

export default TimelineItems