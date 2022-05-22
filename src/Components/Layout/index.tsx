import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import Main from '../Main';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { Container } from './styles';

const Layout: React.FC = () => {

  const { openWidthMenu } = useContext(SidebarContext);

  return (
      <Container mode={openWidthMenu}>
          <Sidebar/>
          <Navbar/>
          <Main/>
      </Container>
  );
}

export default Layout;