import React from "react";
import { Text, Flex } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { SvgProps } from "../../../components/svgIcon/types";
import { RevenueModel } from "../../../config/constants/revenue-model";
import { RevenueModelConfig } from "../../../config/constants/types";
import { DetailsContainer, Title, Box } from "./styled";
import * as IconModule from "../Icons";

const Container = styled.div`
  margin: 0px auto;
  padding: 17px;
  margin-top: 15px;
`;

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const Section: React.FC = () => {
  return (
    <DetailsContainer>
      <Container>
        {RevenueModel.map((model: RevenueModelConfig, ind: number) => {
          const { name, description, image } = model;
          const Icon = Icons[image];
          const iconElement: React.ReactElement = <Icon mr="8px" />;
          if (ind % 2 !== 0) {
            return (
              <Box key={ind}>
                <div className="icon-element">
                {iconElement}
                </div>
                <div className='text-section'>
                  <Title fontSize="3em">{name}</Title>
                  <Text color="textSubtle" fontSize="1.5em">
                    {description}
                  </Text>
                </div>
              </Box>
            );
          }
          return (
            <Box key={ind}>
              <div className='text-section'>
                <Title fontSize="3em">{name}</Title>
                <Text color="textSubtle" fontSize="1.5em">
                  {description}
                </Text>
              </div>
              <div className="icon-element">
              {iconElement}
              </div>
            </Box>
          );
        })}
      </Container>
    </DetailsContainer>
  );
};

export default Section;
