import React from 'react'
import { InfoProps } from './DataTypes'
// Props chuyền vào dưới dạng object 
// Khai báo data type cho từng properties   

const Person = (props :InfoProps) => {
  
  return (
    <div>{props.info.firstName} {props.info.lastName} , {props.info.age}</div>
  )
}

export default Person