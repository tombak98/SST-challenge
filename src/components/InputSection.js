import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const InputSection = () => {
    return (
        <div id="input-section">
            <TextField className="start-time" label="Start Time" variant="outlined"/>
            <TextField className="start-time" label="End Time" variant="outlined"/>
            <Button className="submit-button" variant="contiained">ADD EVENT</Button>
        </div>
    )
}

export default InputSection