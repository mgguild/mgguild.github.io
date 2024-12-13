import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  links: any[]; // Assume 'links' is an array with your menu items
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const DropdownContainer = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding-left: ${(props) => (props.isMobile ? "20px" : "0")};
  background-color: ${(props) => props.isMobile ? "lightgray" : "transparent"};
  padding-top: ${(props) => (props.isMobile ? "0px" : "0")};
  padding-bottom: ${(props) => (props.isMobile ? "0px" : "0")};
  position: absolute;
  left: 0;
  top: 100%; /* Ensures it is positioned directly under the "Earn" button */
  width: 100%;
  z-index: 100;  /* Ensure dropdown is above other items */
`;

const EarnMenuEntry = styled(MenuEntry)<{ isOpen: boolean }>`
  position: relative;  /* So the dropdown can be positioned under this item */
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isEarnActive, setIsEarnActive] = useState<boolean>(false);

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setActiveDropdown((prev) => (prev === label ? null : label)); // Toggle active dropdown

    // Set state to move the "Partner" button down when "Earn" is active
    if (label === "Earn") {
      setIsEarnActive((prev) => !prev); // Toggle "Earn" dropdown active state
    }
  };

  let isPreviousDropdownOpen = false;

  return (
    <Container>
      {links.map((entry, index) => {
        const isDropdownOpen = activeDropdown === entry.label;

        if (entry.items) {
          isPreviousDropdownOpen = isDropdownOpen; // Track if current entry is an open dropdown
          return (
            <EarnMenuEntry
              key={entry.label}
              isOpen={isDropdownOpen} // Pass down the open state
            >
              <MenuLink href="#" onClick={(e) => toggleDropdown(entry.label, e)}>
                <LinkLabel isActive={isDropdownOpen} isPushed={isPushed}>
                  {entry.label}
                </LinkLabel>
              </MenuLink>
              <DropdownContainer isOpen={isDropdownOpen} isMobile={isMobile}>
                {entry.items.map((item) => (
                  <MenuEntry
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={handleClick}
                  >
                    <MenuLink target="_self" href={item.href}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
              </DropdownContainer>
            </EarnMenuEntry>
          );
        }

        const applyMargin = isPreviousDropdownOpen;
        isPreviousDropdownOpen = false; // Reset after applying the margin

        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            style={{
              marginTop: applyMargin ? "48px" : "0", // Add margin to next menu entry after dropdown
            }}
          >
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabel isActive={entry.href === location.pathname} isPushed={isPushed}>
                {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;