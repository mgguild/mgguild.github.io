import { Text } from '@metagg/mgg-uikit';
import styled from 'styled-components'
import React from 'react'
import { HeaderContainer } from './styled';

const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 8px;
    margin: 0px auto;
    width: 100%;
    ${({theme}) => theme.mediaQueries.md} {
        font-size: 17px;
        width: 1200px;
    }
`

const Section:React.FC = () => {
    return (
        <HeaderContainer height='95' mobileHeight='70'>
            <Container>
                <Text as='p' fontSize='2em' bold>
                    With the possibilities of blockchain technology, NFT, cryptocurrency, and our strong play-to-earn GameFi community, MetaGaming Guild uses diversified sources of income such as 
                </Text>
            </Container>
        </HeaderContainer>
    )
}

export default Section;