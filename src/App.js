import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import InputSection from "./components/InputSection";
import Timeline from "./components/Timeline";


function App(){

    const [items, setItems] = React.useState([])
    const [finalItems, setFinal] = React.useState([])
    const [startTotal, setStart] = React.useState(0)
    const [endTotal, setEnd] = React.useState(100)

    React.useEffect(()=>{
        // These would be the starting inputs, as stated in the prompt
        setItems([
            {
                startTime: 0,
                endTime: 50,
            },
            {
                startTime: 55,
                endTime: 65,
            },
            {
                startTime: 5,
                endTime: 75,
            },
            {
                startTime: 40,
                endTime: 100
            }
        ])
    },[])

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
        if (items.length > 0) {
            let ans = []
            for (let i = 0; i < items.length; i++) {
                if (i === 0) {
                    ans.push({
                        startTime: items[i].startTime,
                        endTime: items[i].endTime,
                        row: 0
                    })
                } else {
                    let row = 0
                    while (ans.length <= i) {
                        let checkRow = ans.filter((item)=>item.row === row).sort((a,b)=>a.startTime-b.startTime)
                        if (checkRow.length === 0) {
                            ans.push({
                                startTime: items[i].startTime,
                                endTime: items[i].endTime,
                                row: row
                            })
                            break
                        }
                        for (let j = 0; j < checkRow.length; j++) {
                            if (checkRow[j].endTime <= items[i].startTime) {
                                if (checkRow[j+1] && checkRow[j+1].startTime > items[i].endTime) {
                                    continue
                                } else {
                                    ans.push({
                                        startTime: items[i].startTime,
                                        endTime: items[i].endTime,
                                        row: row
                                    })
                                    break
                                }
                            } else if (j === 0 && checkRow[j].startTime >= items[i].endTime) {
                                ans.push({
                                    startTime: items[i].startTime,
                                    endTime: items[i].endTime,
                                    row: row
                                })
                                break
                            }
                        }
                        row += 1
                    }
                }
            }
            setFinal(ans)
        }
    }

    console.log(items)
    console.log(finalItems)

    return(
        <>
        <div id="main-container">
            <h1>Timeline Visualizer</h1>
            <InputSection/>
            <Timeline start={0} end={100} finalItems={finalItems}/>
        </div>
        </>

    )
}

export default App;