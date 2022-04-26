import styled from "styled-components";
import { MENU_HEIGHT } from "./config";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledNav = styled.div<{ showMenu?: boolean; isMobile?: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  padding: ${({ isMobile }) => !isMobile && `0px 50px 0px 50px`};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-around;
  }
`;


// Components
export const LaunchButton = styled.button`
    background-color: ${({theme}) => theme.colors.MGG_accent2};
    color: white;
    padding: 3px;
    border-radius: 15px;    
    text-align: center;
    font-size: 0.5rem;
    ${({theme}) => theme.mediaQueries.md} {
      padding: 10px;
      font-size: 1rem;
    }
`