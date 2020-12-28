import React, { useState } from 'react'
import styled from 'styled-components'
import { NodeClass, Node} from '../node'

const LinkedList_styled = styled.div`
    position: relative;
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: space-around;
`
const Input = styled.input`
    background-color: ${props => props.theme.backgroundColor};
    &:focus {
        outline: none;
    }
    border: none;
    color: transparent;
    text-shadow: 0 0 0 ${props => props.theme.textColor};
    text-align: center;
    ::placeholder {
        color: ${props=> props.theme.textColor}
        font-size: 10px;
    }
    border: 3px solid ${props => props.theme.textColor};;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    
    
`
class LinkedListClass {
    constructor(head = null){
        this.head = head
    }
}

const LinkedList = (props, children) => {


    // const LinkedList = new LinkedList(node)

    const [nodes, updateNodes] = useState([{value: null, next: {}}])

    return (
     
        <LinkedList_styled>
            <Input placeholder="Enter Node Value" type="text"/>
        </LinkedList_styled>
        
    )
}

export default LinkedList
