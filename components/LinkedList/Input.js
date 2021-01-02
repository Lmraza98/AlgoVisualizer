import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { NodeContext } from '../../contexts/NodeContext'

const NodeInput = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.backgroundColor};
    border: 3px solid ${(props) => props.theme.textColor};;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    color: transparent;

    text-shadow: 0 0 0 ${(props) => props.theme.textColor};
    text-align: center;
    ::placeholder {
        color: ${(props) => props.theme.textColor}
        font-size: 10px;
    }
    &:focus {
        outline: none;
    }
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }   
    transition: background-color 1000ms linear;
`

const Input_container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-top: 1em;
    padding-bottom: 2em;
`

const Input = (props) => {
    

    const handleKeyPress = (e) => {
        let num = e.target.value
        if (e.key === 'Enter') {
            console.log(NodeContext.Consumer)
            // return -1;
            // props.nodeContext.addNode(num)
        }
    }

    return (
        <Input_container>
            <NodeInput
                onKeyPress={handleKeyPress}
                placeholder="Enter Node Value"
                type="number"
            />
        </Input_container>
    )
}

export { Input }
