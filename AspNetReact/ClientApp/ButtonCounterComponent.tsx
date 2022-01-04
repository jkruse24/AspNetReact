import React, { ReactElement, useState } from 'react'
import CSS from 'csstype'
import { hot } from 'react-hot-loader'

function ButtonCounterComponent(): ReactElement {
    const [counter, setCounter] = useState(0)
    let buttonStyle: CSS.Properties = {
        marginRight: '5px'
    }

    return (
        <>
            <input id="counterButton" type="button" onClick={() => { setCounter(counter + 1) }} value="Increment Count" style={buttonStyle} />
            <label htmlFor="counterButton">Count: {counter}</label>
        </>
    )
}   

export default hot(module)(ButtonCounterComponent);