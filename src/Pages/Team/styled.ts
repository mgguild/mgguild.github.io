import styled from 'styled-components'
import { Heading } from '@metagg/mgg-uikit'
import { breakpoints } from '../../theme/Breakpoints'
import BackgroundImage from 'assets/background/BGwlogo.png'

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
  font-size: 14px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-top: 2rem;
  }
`

export const BgPage = styled.div`
  padding: 5rem;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 105%;
    height: 105%;
    z-index: 0;
    background-color: ${({theme}) => theme.addOnColors.background1};
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    // background-position: center;
    background-size: cover;
  }
`