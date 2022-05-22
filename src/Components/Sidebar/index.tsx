import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../Context/SidebarContext';
import DropdownTable from '../../Screens/Tables/DropdownTable';

import * as C from './styles';

const Sidebar: React.FC = () => {

  const { openWidthMenu, toggleWidthMenu } = useContext(SidebarContext);

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const openDropdownMenu = () => setDropdownMenu(!dropdownMenu);

  return (
      <C.Container>
          <C.AreaLogo>

             <C.ContentLogoName>
                  <C.ContentImg>
                    <img src='https://github.com/setxpro.png' alt='logo'/>
                  </C.ContentImg>
                  <C.ContentName>
                      <h2>Patrick Anjos</h2>
                      <h3>Developer</h3>
                  </C.ContentName>
             </C.ContentLogoName>

             <C.ContentButtons>

                {openWidthMenu 
                  ? <C.BtnCircleVoid onClick={toggleWidthMenu}/> 
                  : <C.BtnCircleFull onClick={toggleWidthMenu}/>
                }

             </C.ContentButtons>
              
          </C.AreaLogo>
          <C.AreaMenu>
              <C.NavArea>
                  <ul>
                  <Link to='/dashboards' onClick={() => setDropdownMenu(false)}><li>Dashboard</li></Link> 
                    <Link to='/todo' onClick={() => setDropdownMenu(false)}><li>Todo</li></Link>
                    <Link to='/email' onClick={() => setDropdownMenu(false)}><li>Mail</li></Link>
                    <Link to='/calendar' onClick={() => setDropdownMenu(false)}><li>Calendar</li></Link>
                    <Link to='#' onClick={openDropdownMenu}><li>Tables</li></Link>
                      <DropdownTable modeDropdown={dropdownMenu}/>
                      <Link to='/repositories' onClick={() => setDropdownMenu(false)}><li>Repository</li></Link>
                    <Link to='/works' onClick={() => setDropdownMenu(false)}><li>Works</li></Link>
                  </ul>
              </C.NavArea>
          </C.AreaMenu>
      </C.Container>
  );
}

export default Sidebar;