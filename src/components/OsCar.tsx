import React from 'react'
import { Oscarprops } from './DataTypes'

const OsCar = (props:Oscarprops) => {
  return (
    <div>{props.children}</div>
  )
}   

export default OsCar