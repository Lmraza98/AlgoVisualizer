import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NodeClass, Node } from '../Node/index'
import { SingleLinkedList } from './SingleLinkedList'
import { Input } from './Input'
import {NodeProvider} from '../../contexts/NodeContext'


const LinkedList_styled = styled.div`
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;
  width: 100%;
`

const LinkedList = (props, children) => {
    let list = SingleLinkedList()

    const [nodes, addNode] = useState([])
    const value = { nodes, addNode }

    console.log(value.nodes)


    return (
        <LinkedList_styled >
            <NodeProvider>
              <Input />
            </NodeProvider>
        </LinkedList_styled>
    )
}

export default LinkedList
