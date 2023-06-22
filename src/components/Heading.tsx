import React from 'react'
import { ChildrenProps } from './DataTypes'

const Heading = (props : ChildrenProps) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading