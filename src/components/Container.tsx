// Style Props
import React from "react"
import { ContainerProps } from "./DataTypes"
const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>
        Text content goes here
    </div>
  )
}

export default Container