import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@metagg/mgg-uikit";
import { ChainContainer, PageTitle } from "./styled";
import BSC from "assets/logo/BSC.png";
import ETH from "assets/logo/ETH.png";
import FANTOM from "assets/logo/Fantom.png";
import MGGLogo from "assets/background/MGGLogo.png";
import MenuLink from "components/Menu/MenuLink";
import { Grid } from "@mui/material";

const Container = styled.div`
  font-size: 12px;
  min-width: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px auto;
  padding: 25px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 1500px;
    font-size: 16px;
  }
`;
const StyledImg = styled.img`
  width: 300px;
  margin: 5px auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 350px;
    margin: 0px auto;
  }
`;

const Content = styled(Flex)`
  width: 100%;
  text-align: center;
`;

const chains = [
  {
    icon: BSC,
    link: "https://bscscan.com/address/0x6125adcab2f171bc70cfe2caecfec5509273a86a",
  },
  {
    icon: ETH,
    link: "https://etherscan.io/address/0x7237c0b30b1355f1b76355582f182f6f04b08740",
  },
  {
    icon: FANTOM,
    link: "https://ftmscan.com/address/0xfda8355e8ce22ac44f2d175f4acfec8fac7472d7",
  },
];

const Section: React.FC = () => {
  return (
    <ChainContainer>
      <Container>
        <Content
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <PageTitle size="xl">Game Finance. Democratized.</PageTitle>
          <Text fontSize="1.8em">
            Users Get Real-time Cross-Chain Interoperability
          </Text>
        </Content>
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          style={{ width: "100%" }}
          flexWrap="wrap"
        >
          {chains.map((src) => (
            <MenuLink href={src.link} key={src.icon}>
              <StyledImg src={src.icon} alt="chain-icon" />
            </MenuLink>
          ))}
        </Flex>
        <Content flexDirection="column">
          <PageTitle size="xl">MGG is MORE Than just a GAME!</PageTitle>
          <Flex alignItems='center' justifyContent='center'>
            <img alt="mgg-icon" src={MGGLogo} width="200px" />
            <Text fontSize="2.5em">MGG creates opportunities beyond scholarships!</Text>
          </Flex>
        </Content>
        <Content flexDirection='column'>
          <PageTitle size='xl'>A Global GameFi Guild</PageTitle>
          <Flex>
          <Text as='p' fontSize="1.5em">
            Our gaming community is expanding to Asia, Europe, Africa and the rest of the world.
            With our proven tactics, MGG has won the support of premier gaming partners and active global gamers making us very well-positioned to go dominate the GameFi industry!
            What are you waiting for? Build strong allies with the tactical gamers at MGG today!
          </Text>
          </Flex>
        </Content>
      </Container>
    </ChainContainer>
  );
};

export default Section;
