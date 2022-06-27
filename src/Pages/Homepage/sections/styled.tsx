import { Heading } from "@metagg/mgg-uikit";
import styled from "styled-components";
import BackgroundImage from "assets/background/GrowthBG.png";
import MainBG from "assets/background/MainBG.png";
// Sections

const SectionContainer = styled.div<{ height?: string }>`
  min-height: ${({ height }) => height ?? "100"}vh;
  display: flex;
  padding: 15px;
`;

export const HomeContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-image: url(${MainBG});
  background-repeat: no-repeat;
  background-size: 100% 90%;
  background-position: center top;
`;
export const EcoContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background2};
  padding: 24px;
`;

export const GrowthContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.addOnColors.background1};
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 24px;
  flex-direction: column;
`;

export const ChainContainer = styled(SectionContainer)`
    background-color ${({theme}) => theme.addOnColors.background2};
`
// Components

export const PageTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  margin: 25px 0px;
  letter-spacing: 1px;
`;
