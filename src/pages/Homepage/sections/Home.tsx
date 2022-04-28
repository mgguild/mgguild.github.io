import { Flex, Heading, Text } from '@metagg/mgg-uikit'
import styled from 'styled-components'
import React from 'react'
import { HomeContainer, PageTitle } from './styled'

const Container = styled(Flex)`
    width: 720px;
    max-width: 720px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 0px auto;
    & :first-child { 
        letter-spacing: 2px;
    }

`
const DescriptionContainer = styled(Flex)`
    & > * {
        margin: 10px 0px;
    }
`

const Section:React.FC = () => {

    return (
        <HomeContainer>
            <Container>
                <Heading size='xxl'>We Create Metaverse <br/> Gaming Opportunities <br /> for P2E Masses </Heading>
                <DescriptionContainer flexDirection='column' alignItems='space-around' padding='10px 0px'>
                    <PageTitle size='xl'> About MetaGaming Guild </PageTitle>
                    <Text as='p' fontSize='1.2em'>
                        MetaGaming Guild is a unified DAO-based ecosystem of Gaming <br />
                        Guild, INO/IGO Launchpad, Gamefi Vaults, Game Yield Farming <br />
                        and Play-to-Earn Game aimed at democratizing game finance.
                    </Text>
                    <Text fontSize='1.2em'>
                        MetaGaming Guild envisions to become the primary and most <br />
                        community-centric DAO in the Gamefi metaverse!
                    </Text>
                </DescriptionContainer>
            </Container>
        </HomeContainer>
    )
}

export default Section