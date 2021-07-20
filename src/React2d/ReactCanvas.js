import React from 'react'
import { useState, useEffect } from 'react'



function ReactCanvas(props) {
  const [counter, setCounter] = useState(0)


  useEffect( () => {
    const timer = setInterval(() => {
      setCounter(counter + 1)
    }, 1000/60)

    return () => clearInterval(timer)
  })

  return (
    <>
      <h2>Graphics Elemenst2</h2>
      <h6>Counter: {counter} | secs: {(counter/60).toFixed(1)}</h6>
      <canvas id={props.id} width={props.width} height={props.height} style={{border: '1px solid black'}}></canvas>
    </>
  )
}

export default ReactCanvas
