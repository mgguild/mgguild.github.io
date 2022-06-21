import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Text } from "@metagg/mgg-uikit";
import { Grid } from "@mui/material";
import LaunchButton from "components/LaunchButton";
import MGGLogo from 'assets/static/logo.png'
import { SocialIcon } from "./IconHelpers";
import {
  StyledLogoWrapper,
  StyledMenuWrapper,
  WrapperContainer,
  Description
} from "./styled";
import config from "./config";

const Logo = () => {
  return (
    <Flex alignItems="center" style={{width: '100%', justifyContent: 'center'}}>
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
        <Flex flexDirection="column" alignItems='flex-center' justifyContent='center'>
          <Logo />
          <Description size="sm">
            "A community of tactical gamers"
          </Description>
          <Flex paddingTop="10px">
            {socials.map((social) => (
              <a key={social.name} href={social.href}>
                <SocialIcon name={social.name} />
              </a>
            ))}
          </Flex>
        </Flex>
      </StyledLogoWrapper>
      <StyledMenuWrapper>
        <Grid container wrap='wrap' rowSpacing={{xs: 2}} alignItems='center' justifyContent='center'>
          {links.map((link) => (
            <Grid key={link.name} item xs={5} md={6}>
              <Link to={link.href}>
                  <Text>{link.name}</Text>
              </Link>
            </Grid>
          ))}
          <Grid item xs={5} md={6}>
              <div style={{margin: '10px 0px'}}>
            <LaunchButton />
            </div>
          </Grid>
        </Grid>
      </StyledMenuWrapper>
    </WrapperContainer>
  );
};

export default Footer;
