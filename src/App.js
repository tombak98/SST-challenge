import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import InputSection from "./components/InputSection";
import Timeline from "./components/Timeline";


function App(){

    return(
        <>
        <div id="main-container">
            <h1>Timeline Visualizer</h1>
            <InputSection/>
            <Timeline start={0} end={100}/>
        </div>
        </>

    )
}

export default App;