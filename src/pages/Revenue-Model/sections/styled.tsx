import styled from 'styled-components'
import MainBG from "assets/background/RevenueModelBG.png";
import { Flex, Text } from '@metagg/mgg-uikit'
import { breakpoints } from '../../../theme/Breakpoints';

const SectionContainer = styled.div<{ height?: string }>`
  min-height: ${({ height }) => height ?? "100"}vh;
  display: flex;
  padding: 15px;
`;

export const HeaderContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-image: url(${MainBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`
export const DetailsContainer = styled(SectionContainer)`
  background-color: ${({theme}) => theme.addOnColors.background1};
`
export const Box = styled(Flex)`
  max-width: 1440px;
  padding: 24px;
  .text-section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .icon-element {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      width: 50%;
    }
    @media screen and (max-width: ${breakpoints.Mobile.l}px){
      display: none;
    }
    @media screen and (max-width: ${breakpoints.Mobile.tablet}px){
      & > * {
        width: 250px;
      }
    }
  }
`
export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
  margin-bottom: 15px;
  font-weight: bold;
`