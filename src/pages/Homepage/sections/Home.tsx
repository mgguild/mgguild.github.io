import { Flex, Heading, Text } from '@metagg/mgg-uikit'
import styled from 'styled-components'
import React from 'react'
import MGGLogo from 'assets/background/MGGLogo.png'
import { HomeContainer, PageTitle } from './styled'


const Container = styled(Flex)`
    min-width: 0px;
    max-width: 720px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 0px auto;
    position: relative;
    font-size: 10px;
     :before {
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        display: block;
        position: absolute;
        background-image: url(${MGGLogo});
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: center 10px;
        content: ' ';
        z-index: 0;
    }
    & :first-child { 
        letter-spacing: 2px;
        line-height: 1em;
        z-index: 1;
    }
    ${({theme}) => theme.mediaQueries.md} {
        min-width: 720px;
        font-size: 19px;
    }

`
const DescriptionContainer = styled(Flex)`

    // margin-top: 30px;
    & > * {
        margin: 10px 0px;
    }
`

const Section:React.FC = () => {

    return (
        <HomeContainer height='95'>
            <Container>
                <Text fontSize="3em" bold marginTop='160px'>We Create Metaverse Gaming Opportunities for P2E Masses </Text>
                <DescriptionContainer flexDirection='column' alignItems='space-around' padding='10px 0px'>
                    <PageTitle size='lg'> About MetaGaming Guild </PageTitle>
                    <Text as='p' fontSize='1.2em'>
                        MetaGaming Guild is a unified DAO-based ecosystem of Gaming
                        Guild, INO/IGO Launchpad, Gamefi Vaults, Game Yield Farming
                        and Play-to-Earn Game aimed at democratizing game finance.
                    </Text>
                    <Text fontSize='1.2em'>
                        MetaGaming Guild envisions to become the primary and most
                        community-centric DAO in the Gamefi metaverse!
                    </Text>
                </DescriptionContainer>
            </Container>
        </HomeContainer>
    )
}

export default Section