import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import * as C from './styles';

interface Props {
  toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({toggleTheme}) => {

  const { title } = useContext(ThemeContext);

  const [inputArea, setInputArea] = useState(false);
  const wrapperInput = () => setInputArea(!inputArea);

  const [search, setSearch] = useState('');

  return (
      <C.Container>
        <C.ContentAreaLeft>
          <C.MailIcon/>
          <C.TodoIcon/>
          <C.CalendarIcon/>
        </C.ContentAreaLeft>
        <C.ContentAreaRight>
          <C.ContentSearchArea toggle={inputArea}>
            <input 
              type="text" 
              name="search" 
              placeholder="Search anything..."
              value={search}
              onChange={e => setSearch(e.target.value)}  
            />
          <C.SearchIcon onClick={wrapperInput}/>
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