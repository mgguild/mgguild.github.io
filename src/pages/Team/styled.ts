import styled from 'styled-components'
import { Heading } from '@metagg/mgg-uikit'
import { breakpoints } from '../../theme/Breakpoints'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const HeaderContainer = styled(Container)`
  margin: 0px auto;
  text-align: center;
  font-size: 24px;
  padding: 15px 5px;
  width: 600px;
  & > * {
    margin: 15px 0px;
  }
  @media screen and (max-width: ${breakpoints.Mobile.l}px){
    font-size: 14px;
    width: 100vw;
  }
`
export const ContentContainer = styled(Container)`
  margin-top: 15px;
`

export const PageTitle = styled(Heading)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 2em;
`

export const CardContainer = styled.div`
  font-size: 20px;
`
