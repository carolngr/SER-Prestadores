
import { Icon } from '@/components/atoms/Icon';
import React, { PropsWithChildren, useState } from 'react';
import { Container, Content, ContentChildren, Link, Navbar, NavbarItem, NavbarList, ToggleContent } from './styles';
import { sidebar_menus } from './settings';
import {  useLocation } from 'react-router-dom';


const Sidebar = ( { children } : PropsWithChildren ) => {
  const {pathname} = useLocation();

  const [isOpenSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <Container>
      <Content isOpenSidebar={isOpenSideBar}>
        <ToggleContent onClick={() => setOpenSideBar((batata) => !batata)}>
          <Icon name="menu" size="xlg"/>
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {
              sidebar_menus.map((menu) => (
                <Link key={menu.id} isActive={pathname.includes(menu.path ?? '')} to={menu.path ?? ""} isOpenSidebar={isOpenSideBar}> 

                  {/* <NavbarItem key={menu.id}> */}
                    <Icon name={menu.icon} size='lg' />
                    {isOpenSideBar && menu.label}

                  {/* </NavbarItem> */}
                </Link>
              ))
            }
            
          </NavbarList>
          <NavbarItem>
            logout
          </NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren isOpenSidebar={isOpenSideBar}>
        {children}
      </ContentChildren>
    </Container>
    

  );
}

export default Sidebar;