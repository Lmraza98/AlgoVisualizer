import React from 'react'
import styled from 'styled-components'

const Node_styled = styled.div`
    background-color: ${(props) => props.theme.nodeColor};
    color: ${(props)=>props.theme.textColor}
    width: 100px;
    height: 100px;
    border-radius: 50%;
`
class NodeClass {
    constructor(value) {
        this.value = value
        this.next = null
    }


}
const Node = (props) => {
    return (
        <Node_styled value={props.value} next={props.next}>
            {props.value}
        </Node_styled>
    )
}

export  { NodeClass, Node }
