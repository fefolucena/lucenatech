import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface LandingPageExampleHamburgerMenuProps {
    menuItems: { title: string; href: string }[];
}

const LandingPageExampleHamburgerMenu: React.FC<LandingPageExampleHamburgerMenuProps> = ({ menuItems }) => {

    return (
        <Menu>
            <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            />
            <MenuList>
                {menuItems.map((item, index) => (
                    <MenuItem>
                        {item.title}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
  };

  export default LandingPageExampleHamburgerMenu;