import React from "react";

const TimelineItems = () => {
    return (
        <>
        <div id="timeline-main">
            <div className='timeline-item' style={{width: '50%', marginTop: '0', left: '0%'}}>
                <div>
                    <span className="item-start">0</span>
                    <span className="item-end">50</span>
                </div>
                <div className="bar red"></div>
            </div>
            <div className='timeline-item' style={{width: '70%', marginTop: '40px', left: '5%'}}>
                <div>
                    <span className="item-start">5</span>
                    <span className="item-end">75</span>
                </div>
                <div className="bar blue"></div>
            </div>
            <div className='timeline-item' style={{width: '10%', marginTop: '0', left: '55%'}}>
                <div>
                    <span className="item-start">55</span>
                    <span className="item-end">65</span>
                </div>
                <div className="bar green"></div>
            </div>
        </div>
        </>
    )
}

export default TimelineItems