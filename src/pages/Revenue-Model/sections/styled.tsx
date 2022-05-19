import styled from 'styled-components'
import MainBG from "assets/background/RevenueModelBG.png";

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