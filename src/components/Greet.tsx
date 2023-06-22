import React from 'react'
import { GreetProps } from './DataTypes';
const Greet = (props:GreetProps) => {
  
  // Giá trị mặc định 
  const {age = 20} = props;
  return (
    <div>
        <div>{props.check ? `Welcome ${props.name} , ${props.age}` : 'You need to login'}</div>
    </div>
  )
}

export default Greet