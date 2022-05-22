import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarActiveContext } from '../../Context/SidebarActiveContext';
import { SidebarContext } from '../../Context/SidebarContext';
import DropdownTable from '../../Screens/Tables/DropdownTable';

import * as C from './styles';

const Sidebar: React.FC = () => {

  const { openWidthMenu, toggleWidthMenu } = useContext(SidebarContext);

  const {
    home,
    dashboard,
    todo,
    email,
    calendar,
    table,
    works,
    repository,
    toggleHome,
    toggleDash,
    toggleTodo,
    toggleEmail,
    toggleCalendar,
    toggleTable,
    toggleWorks,
    toggleRepository
  } = useContext(SidebarActiveContext);

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const openDropdownMenu = () => setDropdownMenu(!dropdownMenu);

  
  return (
      <C.Container>
          <C.AreaLogo>

             <C.ContentLogoName>
                  <Link to="/">
                  <C.ContentImg openWidthMenu={openWidthMenu}>
                    <img src='https://github.com/setxpro.png' alt='logo'/>
                  </C.ContentImg>
                  </Link>
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
                    <Link to='/' onClick={() => {
                      setDropdownMenu(false)
                      toggleHome()
                    }} className={home ? 'active' : ''}>
                      
                      <C.HomeIcon/><li>Home</li>

                    </Link> 
                    <Link to='/dashboards' onClick={() => {
                      setDropdownMenu(false)
                      toggleDash()
                    }} className={dashboard ? 'active' : ''}>

                      <C.DashboardIcon/><li>Dashboard</li>

                    </Link> 
                    <Link to='/todo' onClick={() => {
                      setDropdownMenu(false)
                      toggleTodo()
                    }} className={todo ? 'active' : ''}>

                      <C.TodoIcon/><li>Todo</li>

                    </Link>
                    <Link to='/email' onClick={() => {
                      setDropdownMenu(false)
                      toggleEmail()
                    }} className={email ? 'active' : ''}>

                      <C.EmailMenuIcon/><li>Mail</li>

                    </Link>
                    <Link to='/calendar' onClick={() => {
                      setDropdownMenu(false)
                      toggleCalendar()
                    }} className={calendar ? 'active' : ''}>

                      <C.CalendarIcon/><li>Calendar</li></Link>

                    <Link to='#' onClick={openDropdownMenu} className={table ? 'active' : ''}>
                      
                      <C.TableIcon onClick={() => toggleTable()}/><li>Tables</li>

                    </Link>
                    <DropdownTable modeDropdown={dropdownMenu}/>
                    <Link to='/repositories' onClick={() => {
                      setDropdownMenu(false)
                      toggleRepository();
                    }} className={repository ? 'active' : ''}>

                      <C.RepositoryIcon/><li>Repository</li>

                    </Link>
                    <Link to='/works' onClick={() => {
                      setDropdownMenu(false);
                      toggleWorks();
                    }} className={works ? 'active' : ''}>

                      <C.WorksIcon/><li>Works</li>

                    </Link>
                  </ul>
              </C.NavArea>
          </C.AreaMenu>
      </C.Container>
  );
}

export default Sidebar;