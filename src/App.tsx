import React from 'react';
import Layout from './Components/Layout';
import { SidebarProvider } from './Context/SidebarContext';

const App: React.FC = () => {
  return (
    <SidebarProvider>
        <Layout/>
    </SidebarProvider>
  );
}

export default App;