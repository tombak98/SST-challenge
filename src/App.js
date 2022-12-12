import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import InputSection from "./components/InputSection";


function App(){

    return(
        <>
        <div id="main-container">
            <h1>Timeline Visualizer</h1>
            <InputSection/>
        </div>
        </>

    )
}

export default App;