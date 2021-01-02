import React, { useContext, useState } from 'react'

const NodeContext = React.createContext({})

const NodeProvider = props => {

    const [nodes, addNode] = useState([])
    
    const nodeContext = {
        nodes: nodes, 
        addNode: (nodes) => {addNode([...nodes],node)}
    }
    
    return <NodeContext.Provider value={nodeContext}>
               {props.children}
            </NodeContext.Provider>
}
export { NodeContext, NodeProvider}