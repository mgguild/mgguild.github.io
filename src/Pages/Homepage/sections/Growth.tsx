import React from "react";
import styled from "styled-components";
import { Text, Heading, Flex } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";

import GrowthPNG from "assets/images/Growth.svg";
import { GrowthContainer, PageTitle } from "./styled";
import { Figures } from "../../../config/constants/homepageConfig";


const Container = styled.div`
  margin: 30px auto;
  display: flex;
  padding: 25px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const GridAdapt = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const FigureWrapper = styled.div`
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 24px;
  align-items: center;
  flex-wrap: wrap;
    text-align: center;
  & > * {
    ${Text}.subtitle {
      color: ${({ theme }) => theme.colors.MGG_accent2};
    }
  }

`;

const FigureComponent = () => {
  return (
    <FigureWrapper>
      <GridAdapt>
        <Grid item xs={12} sm={12} md={6} zeroMinWidth>
          <Grid style={{justifyContent: 'center'}} container rowSpacing={{xs: 6,  md: 12 }}>
            {Figures.map((figure) => {
              return (
                <Grid
                  key={figure.subtitle}
                  item
                  xs={12}
                  md={6}
                  zeroMinWidth
                  style={{maxWidth: '30rem'}}
                >
                  <Heading size="xl">{figure.amount}</Heading>
                  <Text className="subtitle" fontSize="1.5em">
                    {figure.subtitle}
                  </Text>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{maxWidth: '60%'}} alt="growth-image" src={GrowthPNG} />
        </Grid>
      </GridAdapt>
    </FigureWrapper>
  );
};

const Section: React.FC = () => {
  return (
    <GrowthContainer height='50'>
        <div style={{textAlign: 'center'}}>
          <PageTitle size="xl">MetaGaming Guild Growth Figures</PageTitle>
          <Text fontSize="1.2em">
            Since the project was launched in 2021, MetaGaming Guild has
            maintaned a 50% Month-on-Month growth
          </Text>
        </div>
      <Container style={{padding: '0'}}>
        <FigureComponent />
      </Container>
    </GrowthContainer>
  );
};

export default Section;
