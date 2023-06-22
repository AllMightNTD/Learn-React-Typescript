import React from 'react'
import { InputProps } from './DataTypes'


const Input = (props : InputProps) => {
    return <input onChange={props.handleChange} type="text" value={props.value} />
  
}

export default Input