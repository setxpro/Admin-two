import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import * as C from './styles';

interface Props {
  toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({toggleTheme}) => {

  const { title } = useContext(ThemeContext);

  return (
      <C.Container>
        <C.ContentAreaLeft>
          <C.MailIcon/>
          <C.TodoIcon/>
          <C.CalendarIcon/>
        </C.ContentAreaLeft>
        <C.ContentAreaRight>
          <C.ContentSearchArea>
          <input type="search" name="search" placeholder="Search anything..."/>
          <C.SearchIcon/>
          </C.ContentSearchArea>
          <C.ContentBell>
            <C.BellIcon/>
          </C.ContentBell>
          <C.AreaToggleTheme>
            {title === 'dark' && <C.LightIcon onClick={toggleTheme}/>}
            {title === 'light' && <C.DarkIcon onClick={toggleTheme}/>}
          </C.AreaToggleTheme>
        </C.ContentAreaRight>
      </C.Container>
  );
}

export default Navbar;