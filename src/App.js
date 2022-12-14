import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import InputSection from "./components/InputSection";
import Timeline from "./components/Timeline";


function App(){

    const [items, setItems] = React.useState([
    {
        startTime: 0,
        endTime: 50,
        time: Date.now()+2
    },
    {
        startTime: 55,
        endTime: 65,
        time: Date.now()+3
    },
    {
        startTime: 15,
        endTime: 75,
        time: Date.now()+4
    }])
    const [finalItems, setFinal] = React.useState([])
    const [startTotal, setStart] = React.useState(0)
    const [endTotal, setEnd] = React.useState(100)

    // whenever items update, run these as well
    React.useEffect(()=> {
        startAndEnd()
        addRows()
    }, [items])

    // calculate the start and end time
    function startAndEnd() {
        if (items.length > 0) {
            let startArray = items.sort((a,b) => a.startTime - b.startTime)
            setStart(startArray[0].startTime)
            let endArray = items.sort((a,b) => b.endTime - a.endTime)
            setEnd(endArray[0].endTime)
        }
    }

    // add row numbers to each item, which will display them correctly
    function addRows() {
        // first make sure there are items in the state
        if (items.length > 0) {
            let reference = [...items]
            // sort items by time, to place them correctly
            reference.sort((a,b) => a.time - b.time)
            let ans = []
            // loop through each item in the array
            for (let i = 0; i < reference.length; i++) {
                // if its the first item, add it to row 0
                if (i === 0) {
                    ans.push({
                        startTime: reference[i].startTime,
                        endTime: reference[i].endTime,
                        row: 0
                    })
                } else {
                    // else, loop through each row and see if it fits in the row.
                    // if not, then increment row by 1 and keep checking
                    let row = 0
                    while (ans.length <= i) {
                        // sort each row
                        let checkRow = ans.filter((item)=>item.row === row).sort((a,b)=>a.startTime-b.startTime)
                        // if nothing existing in the row, add it
                        if (checkRow.length === 0) {
                            ans.push({
                                startTime: reference[i].startTime,
                                endTime: reference[i].endTime,
                                row: row
                            })
                            break
                        }
                        // loop through each item in the row and see if it can fit
                        for (let j = 0; j < checkRow.length; j++) {
                            if (checkRow[j].endTime <= reference[i].startTime) {
                                if (checkRow[j+1] && checkRow[j+1].startTime < reference[i].endTime) {
                                    continue
                                } else {
                                    ans.push({
                                        startTime: reference[i].startTime,
                                        endTime: reference[i].endTime,
                                        row: row
                                    })
                                    break
                                }
                            } else if (j === 0 && checkRow[j].startTime >= reference[i].endTime) {
                                ans.push({
                                    startTime: reference[i].startTime,
                                    endTime: reference[i].endTime,
                                    row: row
                                })
                                break
                            }
                        }
                        row += 1
                    }
                }
            }
            setFinal([...ans])
        }
    }

    function addItem(startTime, endTime) {
        let addArray = []
        for (let i = 0; i <= items.length; i++) {
            if (i === items.length) {
                let newObj = {
                    startTime: startTime,
                    endTime: endTime,
                    time: Date.now()
                }
                addArray.push(newObj)
            } else {
                addArray.push({
                    startTime: items[i].startTime,
                    endTime: items[i].endTime,
                    time: items[i].time
                })
            }
        }
        setItems([...addArray])
    }

    return(
        <>
        <div id="main-container">
            <h1>Timeline Visualizer</h1>
            <InputSection addItem={addItem}/>
            <Timeline start={startTotal} end={endTotal} finalItems={finalItems}/>
        </div>
        </>

    )
}

export default App;