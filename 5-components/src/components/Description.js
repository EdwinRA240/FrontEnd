import styled from 'styled-components'
import React from 'react';

function Description() {
    const Parrafo = styled.p`
    font-size: 20px
    font-weight: 700`

    return (
        <div>
            <p className={Parrafo}>
                qwertyuiop
            </p>
        </div>
    )
}

export default Description;