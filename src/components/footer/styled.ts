import styled from 'styled-components'
import { breakpoints } from 'theme/Breakpoints'

export const WrapperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    min-height: 25vh;
    @media screen and (max-width: ${breakpoints.Mobile.l}px) {
        flex-direction: column;
        min-height: 10vh;
    }
`

const WrapperChild = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    justify-content: center;
`

export const StyledLogoWrapper = styled(WrapperChild)`
    & > * {
        & > * {
            padding: 10px 0px;
        }
    }
    ${({theme}) => theme.mediaQueries.md} {
        margin-left: 100px;
    }
`

export const StyledMenuWrapper = styled(WrapperChild)`
    width: 500px;
    padding: 15px 0px;
    margin-top: 60px;
    @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
        width: 300px;
    }
    @media screen and (max-width: ${breakpoints.Mobile.l}px){
        width: 100%;
    }
    
`