import React from "react";
import styled from "styled-components";
import { Flex, Text } from "@metagg/mgg-uikit";
import { ChainContainer, PageTitle } from "./styled";
import BSC from "assets/logo/BSC.png";
import ETH from "assets/logo/ETH.png";
import FANTOM from "assets/logo/Fantom.png";
import MenuLink from "components/Menu/MenuLink";

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
    <ChainContainer height="60">
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          style={{ width: "100%", textAlign: "center" }}
        >
          <PageTitle size="xl">Game Finance. Democratized.</PageTitle>
          <Text fontSize="1.8em">
            Users Get Real-time Cross-Chain Interoperability
          </Text>
        </Flex>
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
      </Container>
    </ChainContainer>
  );
};

export default Section;
