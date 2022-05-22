import React, { useContext } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';
import Main from '../Main';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { Container } from './styles';

interface Props {
  toggleTheme: () => void;
}

const Layout: React.FC<Props> = ({ toggleTheme }) => {

  const { openWidthMenu } = useContext(SidebarContext);

  return (
      <Container mode={openWidthMenu}>
          <Sidebar/>
          <Navbar toggleTheme={toggleTheme}/>
          <Main/>
      </Container>
  );
}

export default Layout;