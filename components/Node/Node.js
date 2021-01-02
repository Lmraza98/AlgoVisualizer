import React from 'react'
import styled from 'styled-components'

const Node_styled = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor}
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    border:3px solid ${(props) => props.theme.textColor};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Node_container = styled.div`
    height: 100%;
    width: 100%;
    grid-column-start: ${(props) => props.colStart};
    grid-column-end: ${(props) => props.colEnd};
    grid-row-start: ${(props) => props.rowStart};
    grid-row-end: ${(props) => props.rowEnd};
`

const Node = (props) => {
    return (
        <Node_container>
            <Node_styled value={props.value}>{props.value}</Node_styled>
        </Node_container>
    )
}

export default Node
