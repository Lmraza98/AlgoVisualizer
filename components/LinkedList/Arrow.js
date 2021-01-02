import React from 'react'
import styled from 'styled-components'
import Image from 'Next/image'

const Arrow_container = styled.div`
    display: block;
    ${props=>props.reverse ? "" : "translate: rotate(180);"};
    width: 30px;
    height: 30px;
`

export default Arrow = () => {
    return (
        <Arrow_container>
            <Image layout="fill" src='/arrow.png'> </Image>
        </Arrow_container>
    )
}