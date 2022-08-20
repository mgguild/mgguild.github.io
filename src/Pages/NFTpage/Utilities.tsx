import React from "react";
import { Flex, Heading, Text } from "@metagg/mgg-uikit";
import { nftUtilities } from "config/constants/NFts";
import styled from "styled-components";

const Section: React.FC = () => {
  return (
    <Container>
      <Text
        className="center"
        fontSize="3.5em"
        bold
        color="primary"
        style={{ letterSpacing: "5px" }}
      >
        10 Utilities of MetaGaming NFTs
      </Text>
      <Ol>
        {nftUtilities.map((text) => (
          <Li key={text}>{text}</Li>
        ))}
      </Ol>
    </Container>
  );
};

export default Section;

const Ol = styled.ol`
  color: white;
  font-size: 1.5em;
  list-style-type: decimal;
  counter-reset: item;
  line-height: 1.5;
  list-style-position: revert;
`;
const Li = styled.li`
  padding: 1rem 0 0 1rem;
  margin-left: 2rem;
  &::marker {
    content: item;
    counter-increment: item;
    font-weight: bold;
    color: #00b6ff;
    width: 1rem;
    margin-right: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0rem 0px 5rem 0px;
  padding: 2.5rem;
  background-color: rgba(12, 1, 44, 1);
  background-image: url("/nft/groupdna.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50%;
  font-size: 12px;
  & .center {
    text-align: center;
    ${({ theme }) => theme.mediaQueries.md} {
      text-align: left;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 17px;
    padding: 5rem;
    min-height: 50vh;
    background-size: contain;
  }
`;
