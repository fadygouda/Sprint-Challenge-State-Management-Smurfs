import React from 'react'
import styled from 'styled-components'


export default function Smurf(props) {
    console.log(props)


    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p>
        </div>
    )
} 