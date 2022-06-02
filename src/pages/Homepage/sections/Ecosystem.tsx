import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Flex, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import { breakpoints } from "theme/Breakpoints";
import { SvgProps } from "components/svgIcon/types";
import { EcoContainer, PageTitle } from "./styled";
import { IEcosystems, Ecosystems } from "../../../config/constants/homepageConfig";
import * as IconModule from './icons'

const Container = styled(Flex)`
  padding: 50px;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  max-width: 1400px;
  align-items: space-between;
  justify-content: space-evenly;
`;
const StyledCard = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.MGG_accent2};
  background-color: ${({ theme }) => theme.addOnColors.background1};
  height: 375px;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  @media screen and (max-width: ${breakpoints.Mobile.tablet}px) {
      font-size: 12px;
  }
  & > * {
    margin: 5px 0px;
  }  
`;
const CardSection = styled(Flex)`
  & > ${Text}.title {
    color: ${({ theme }) => theme.colors.MGG_accent2};
  }
  & > ${Text}.status {
    color: ${({ theme }) => theme.colors.MGG_accent1};
  }
  & > ${Text}.desc {
    color: ${({ theme }) => theme.colors.text};
    margin: 5px 0px;
  }
`;

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const Card: React.FC<IEcosystems> = ({
 image,
  name,
  subtitle,
  description,
  status = "",
}) => {
  const theme = useContext(ThemeContext);
    const Icon = Icons[image]
    const iconElement: React.ReactElement = <Icon />
  return (
    <StyledCard>
        {iconElement}
      <CardSection flexDirection="column">
      <Text className="title" fontSize="1.5em" bold>
          ({name})
        </Text>
        <Text className="title" fontSize="1.2em" marginTop="-7px">
          ({subtitle})
        </Text>
        <Text className="status" textTransform="uppercase" bold>
          {status && status}
        </Text>
        <Text className="desc" as="p">
          {description}
        </Text>
      </CardSection>
    </StyledCard>
  );
};

const Cards: React.FC = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      rowSpacing={{ xs: 4, sm: 5, md: 6}}
      justifyContent="center"
      alignItems='center'
    >
      {Ecosystems.map((Ecosystem) => {
        const { name, subtitle, description, status, image } = Ecosystem;
        return (
          <Grid key={name} item xs={12} sm={4} md={4} lg={3}>
            <Card
              name={name}
              subtitle={subtitle}
              description={description}
              status={status}
              image={image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

const Section: React.FC = () => {
  return (
    <EcoContainer height="100">
      <Container>
        <PageTitle size="xl">MetaGaming Guild Ecosystem</PageTitle>
          <Cards />
      </Container>
    </EcoContainer>
  );
};

export default Section;
