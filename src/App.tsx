import React, { useState } from 'react';
import Layout from './Components/Layout';
import { SidebarProvider } from './Context/SidebarContext';

import light from './Styles/themes/light';
import dark from './Styles/themes/dark';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './Helpers/usePersistedState';

const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Layout toggleTheme={toggleTheme}/>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;