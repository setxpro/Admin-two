import React, { useContext, useState } from 'react';
import { SidebarContext } from '../../Context/SidebarContext';

import * as C from './styles';

const Sidebar: React.FC = () => {

  const { openWidthMenu, toggleWidthMenu } = useContext(SidebarContext);

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

          </C.AreaMenu>
      </C.Container>
  );
}

export default Sidebar;