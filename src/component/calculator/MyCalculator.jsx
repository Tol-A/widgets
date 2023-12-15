import React, { useState } from 'react';
import './MyCalculatorStyle.css'

function MyCalculator() {
    const [value, setValue] = useState('')

    const handleAddNumber = (e) => {
     setValue(value + e.target.value)
    }
    const handleDeleteLast = () => {
       setValue(value.slice(0,-1))
    }
    const handleDeleteAll = () => {
     setValue('')
    }
    const handleResult = () => {
     setValue(eval(value))
    }
  return (
    <div className="calculater">
        <form action = ''>
        <div className="calculaterDisplay">
          <input
            value = {value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
          <div>
            <input type= 'button' value = 'AC' onClick = { handleDeleteAll}/>
            <input type= 'button' value = 'DE' onClick = {handleDeleteLast}/>
            <input type= 'button' value = '.' onClick = {handleAddNumber}/>
            <input type= 'button' value = '/' onClick = {handleAddNumber}/>
          </div>
          <div>
            <input type= 'button' value = '7' onClick = {handleAddNumber}/>
            <input type= 'button' value = '8' onClick = {handleAddNumber}/>
            <input type= 'button' value = '9' onClick = {handleAddNumber}/>
            <input type= 'button' value = '*' onClick = {handleAddNumber}/>
          </div>
          <div>
            <input type= 'button' value = '4' onClick = {handleAddNumber}/>
            <input type= 'button' value = '5' onClick = {handleAddNumber}/>
            <input type= 'button' value = '6' onClick = {handleAddNumber}/>
            <input type= 'button' value = '+' onClick = {handleAddNumber}/>
          </div>
          <div>
            <input type= 'button' value = '1' onClick = {handleAddNumber}/>
            <input type= 'button' value = '2' onClick = {handleAddNumber}/>
            <input type= 'button' value = '3' onClick = {handleAddNumber}/>
            <input type= 'button' value = '-' onClick = {handleAddNumber}/>
          </div>
          <div>
            <input type= 'button' value = '00' onClick = {handleAddNumber}/>
            <input type= 'button' value = '0' onClick = {handleAddNumber}/>
            <input type= 'button' value = '='  onClick = {handleResult } className='equal'/>
          </div>
        </form>
      </div>
  )
}

export default MyCalculator