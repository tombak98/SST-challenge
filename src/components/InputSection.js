import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const InputSection = ({addItem}) => {

    const [inputStart, setStart] = React.useState('')
    const [inputEnd, setEnd] = React.useState('')

    function submitHandler() {
        let start = Math.floor(parseInt(inputStart))
        let end = Math.floor(parseInt(inputEnd))
        if (start >= end) {
            alert('You cannot have a start time that is equal to or greater than the end time')
        } else if (isNaN(start) || isNaN(end)) {
            alert('You cannot leave the inputs empty, or you must input numbers')
        } else {
            addItem(start, end)
            setStart('')
            setEnd('')
        }
    }

    return (
        <div id="input-section">
            <TextField value={inputStart} onChange={(e)=>setStart(e.target.value)} className="start-time" label="Start Time" variant="outlined"/>
            <TextField value={inputEnd} onChange={(e)=>setEnd(e.target.value)} className="start-time" label="End Time" variant="outlined"/>
            <Button onClick={submitHandler} className="submit-button" variant="contiained">ADD EVENT</Button>
        </div>
    )
}

export default InputSection