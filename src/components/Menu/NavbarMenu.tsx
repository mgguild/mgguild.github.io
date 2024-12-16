import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { useLocation } from "react-router-dom";
import { MoreHorizontal } from "react-feather";
import { Dropdown, Text, Flex } from "@metagg/mgg-uikit";
import { LinkLabel, MenuEntry, DropdownMenu, DropdownMenuItem } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { MenuEntry as IMenuEntry } from "./types";

const LinkContainer = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
`;

const StyledMenuEntry = styled(MenuEntry)`
  background-color: transparent;
  padding: 0;
  position: relative;

`;

const NavBarContainer = styled.div<{ scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(9, 1, 52, 0.8)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLinkLabel = styled(LinkLabel)`
  text-align: left;
  ${({ isActive, theme }) =>
    isActive &&
    `
&::before {
  transform: translateX(-50%);
  position: absolute;
  height: 8px;
  bottom: 43%;
  content: '';
  width: 8px;
  left: 0;
}
`}
`;

const DropdownItem = styled.div`
  padding: 12px 16px; /* Adds padding inside each dropdown item */
  white-space: nowrap;
  margin-bottom: 4px; /* Adds a small gap between dropdown items */

  &:hover {
    background-color: #080E4B;
  }

  &:last-child {
    margin-bottom: 0; /* Removes gap after the last dropdown item */
  }
`;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NavbarTitle: React.FC<{ label: string; isActive?: Array<{ label: string; href: string }> }> = ({
  label,
  isActive,
}) => {
  const theme = useContext(ThemeContext);
  switch (label) {
    case "More":
      return <MoreHorizontal color={isActive?.length !== 0 ? theme.colors.text : theme.colors.textSubtle} />;
    default:
      return (
        <Text fontSize="14px" color={isActive?.length !== 0 ? theme.colors.text : theme.colors.textSubtle}>
          {label}
        </Text>
      );
  }
};

const NavbarMenu: React.FC<{ links: Array<IMenuEntry> }> = ({ links }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <NavBarContainer scrolled={scrolled}>
      <LinkContainer>
        {links && links.map((link) => (
          <>
            {
              link.items && link.items.length > 0 ?
              (<MenuEntry key={link.label} style={{position: 'relative'}}>
                  <LinkLabel onClick={() => setIsOpen(!isOpen)}>
                    {link.label}
                  </LinkLabel>
                  <DropdownMenu isVisible={isOpen} onMouseLeave={() => setIsOpen(false)}>
                    {link.items.map((subItem) => (
                      <MenuLink key={subItem.label} href={subItem.href} onClick={() => {setIsOpen(false); scrollToTop()}}>
                        <DropdownMenuItem >
                          {subItem.label}
                        </DropdownMenuItem>
                      </MenuLink>
                    )) }
                  </DropdownMenu>
              </MenuEntry>)
              :
              (<MenuEntry key={link.label}>
                <MenuLink href={link.href} onClick={scrollToTop}>
                  <LinkLabel isActive={link.href === location.pathname}>
                    {link.label}
                  </LinkLabel>
                </MenuLink>
              </MenuEntry>)
            }
          </>
        ))}
      </LinkContainer>
    </NavBarContainer>
  );
};


export default NavbarMenu;