import React from 'react'

import {useState, useRef} from 'react'
import "./ICSmarker.css"
import "../../"


const Circle = () => {
  const [position, setPosition] = useState({x: 50, y: 50, coords: {}})

  const handleMouseMove = useRef(e => {
    setPosition(position => {
      const xDiff = position.coords.x - e.pageX
      const yDiff = position.coords.y - e.pageY
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      }
    })
  })

  const handleMouseDown = e => {
    const pageX = e.pageX
    const pageY = e.pageY
    setPosition(position =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      }),
    )
    document.addEventListener('mousemove', handleMouseMove.current)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove.current)
    setPosition(position => Object.assign({}, position, {coords: {}}))
  }

  return (
    
    <circle
      cx={position.x}
      cy={position.y}
      r={15}
      fill="#DE1306"
      stroke="#DE1306"
      strokeWidth="1"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
    // <svg src="../../assets/icsp.svg" onMouseDown={handleMouseDown}  onMouseUp={handleMouseUp}/>
  )
}

const Casualty = () => {
  return (
    <div className='casualtypoint'>
    <svg
      style={{
        // border: '1px solid green',
        height: '700px',
        width: '100%',
        backgroundColor:'transparent'
      }}
    >
      <Circle />
      <Circle />
    </svg>
    </div>
  )
}

export default Casualty;
