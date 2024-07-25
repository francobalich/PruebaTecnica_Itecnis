import { useState } from 'react'
import './NumberSelect.css'

export const NumberSelect = ({initialValue=0}) => {
  const [value, setValue] = useState(initialValue)
  const handleSubtract = ()=>{
    if(value>1){
      setValue(valor=>valor-1)
    }
  }
  const handleAdd = ()=>{
      setValue(valor=>valor+1)
  }
  return (
    <div className='numberselect'>
      <button onClick={handleSubtract}>-</button>
      <input type="number" value={value} />
      <button onClick={handleAdd}>+</button>
    </div>
  )
}
