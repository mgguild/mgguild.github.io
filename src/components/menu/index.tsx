import React from "react";
import { useMatchBreakpoints } from "@metagg/mgg-uikit";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import Panel from "./Panel";
import { BodyWrapper, LaunchButton, StyledNav, Wrapper, Inner, MobileOnlyOverlay} from "./styled";
import links from "./config";

const Menu = (props) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = React.useState(!isMobile);
  const [showMenu, setShowMenu] = React.useState(true);

  return (
    <Wrapper>
      <StyledNav isMobile={isMobile} showMenu={showMenu}>
        <Logo 
        isPushed={isPushed}
        togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
        href="/"
        isMobile={isMobile}
        />
        {!isMobile && <NavbarMenu links={links} />}
        <LaunchButton as="a" href="https://app.metagg.com/#/farms">
          Launch App
        </LaunchButton>
      </StyledNav>
      <BodyWrapper>
        { isMobile && (
        <Panel 
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          pushNav={setIsPushed}
          links={links}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu}>
          { props.children }
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};


export default Menu;
