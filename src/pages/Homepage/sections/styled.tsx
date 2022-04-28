import { Heading } from '@metagg/mgg-uikit'
import styled from 'styled-components'

// Sections

const SectionContainer = styled.div`
    display: flex;
    height: 100vh;
    padding: 15px;
`

export const HomeContainer = styled(SectionContainer)`
    background-color:  ${({theme}) => theme.addOnColors.background1};
`
export const EcoContainer = styled(SectionContainer)`
    background-color: ${({theme}) => theme.addOnColors.background2};
    padding: 24px;
`
// Components

export const PageTitle = styled(Heading)`
    color: ${({theme}) => theme.colors.primary};
    margin: 10px 0px;
    letter-spacing: 2px;
`