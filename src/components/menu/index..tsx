import React from "react";
import { useMatchBreakpoints } from "@metagg/mgg-uikit";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { LaunchButton, StyledNav, Wrapper } from "./styled";
import links from './config'

const MainMenu = () => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = React.useState(!isMobile);
  const [showMenu, setShowMenu] = React.useState(true);

  return (
    <Wrapper>
    <StyledNav isMobile={isMobile} showMenu={showMenu}>
    <Logo />
    <NavbarMenu links={links}/>
    <LaunchButton as='a' href="https://app.metagg.com/#/farms"> Launch App </LaunchButton>    
    </StyledNav>
    </Wrapper>
  );
};

const Menu = (props) => {
  return (
      <>
    <MainMenu />
    { props.children}
    </>
  );
};

export default Menu;
