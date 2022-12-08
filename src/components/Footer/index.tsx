import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Flex, Heading, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import LaunchButton from "components/LaunchButton";
import MGGLogo from "assets/static/logo.png";
import { SocialIcon } from "./IconHelpers";
import {
  StyledLogoWrapper,
  StyledMenuWrapper,
  WrapperContainer,
  Description,
} from "./styled";
import config from "./config";

const LaunchDiv = styled(Flex)`
  margin: 10px 0px;
  width: 65%;
  ${({theme}) => theme.mediaQueries.md} {
    width: 50%;
    padding: 0px 25px;
  }
`

const Logo = () => {
  return (
    <Flex
      alignItems="center"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <img alt="mgg-logo" src={MGGLogo} width="60px" height="60px" />
      &nbsp;
      <Heading size="lg">MetaGaming Guild</Heading>
    </Flex>
  );
};

const Footer: React.FC = () => {
  const { socials, links } = config;
  return (
    <WrapperContainer>
      <StyledLogoWrapper>
        <Flex
          flexDirection="column"
          alignItems="flex-center"
          justifyContent="center"
        >
          <Logo />
          <Description size="sm">"A community of tactical gamers"</Description>
          <Grid paddingTop="10px" container alignItems='center' rowSpacing={1}>
            {socials.map((social) => (
              <Grid item md={2} sx={{textAlign: 'center'}}>
              <a key={social.name} href={social.href} target="_blank">
                <SocialIcon name={social.name} />
              </a>
              </Grid>
            ))}
          </Grid>
        </Flex>
      </StyledLogoWrapper>
      <StyledMenuWrapper>
        <Grid
          container
          wrap="wrap"
          rowSpacing={{ xs: 2 }}
          alignItems="center"
          justifyContent="center"
        >
          {links.map((link) => (
            <Grid key={link.name} item xs={5} md={6}>
              <Link to={link.href}>
                <Text>{link.name}</Text>
              </Link>
            </Grid>
          ))}
        </Grid>
        <LaunchDiv justifyContent='flex-end'>
              <LaunchButton />
            </LaunchDiv>
      </StyledMenuWrapper>
    </WrapperContainer>
  );
};

export default Footer;
