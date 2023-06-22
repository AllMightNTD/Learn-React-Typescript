import React from 'react'
import { PersonListProps } from './DataTypes'


const PersonList = (props : PersonListProps) => {
  return (
    <div>
        {
            props.names.map((name, index) => (
                <h2 key={index}>{name.first} , {name.last}</h2>
                ))
        }
    </div>
  )
}

export default PersonList