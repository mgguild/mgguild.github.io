import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@metagg/mgg-uikit'
import { ChainContainer, PageTitle } from './styled'
import BSC from 'assets/logo/BSC.png'
import ETH from 'assets/logo/ETH.png'
import FANTOM from 'assets/logo/Fantom.png'

const Container = styled.div`
    font-size: 12px;
    min-width: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px auto;
    padding: 25px;
    flex-direction: column;
    ${({theme}) => theme.mediaQueries.md} {
        min-width: 1500px;
        font-size: 16px;
    }
`
const StyledImg = styled.img`
    width: 150px;
    margin: 5px auto;
    ${({theme}) => theme.mediaQueries.md} {
        width: 350px;
        margin: 0px auto;
    }
`

const chains = [BSC, ETH, FANTOM]

const Section: React.FC = () => {
    return (
        <ChainContainer height='40'>
            <Container>
                <Flex flexDirection='column' alignItems='center' justifyContent='flex-start' style={{width: '100%', textAlign: 'center'}}>
                    <PageTitle size="lg">Game Finance. Democratized.</PageTitle>
                    <Text fontSize='2em'>Users get Real-time Cross-Chain Interoperability</Text>
                </Flex>
                <Flex justifyContent='space-evenly' alignItems='center' style={{ width: '100%'}} flexWrap='wrap'>
                  {chains.map((src) => (<StyledImg key={src} src={src} alt='chain-icon' />))}
                </Flex>
            </Container>
        </ChainContainer>
    )
}

export default Section;