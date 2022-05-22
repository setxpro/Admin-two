import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from '../Screens/Calendar';
import Dashboards from '../Screens/Dashboards';
import Home from '../Screens/Home';
import Mail from '../Screens/Mail';
import PageNotFound from '../Screens/PageNotFound';
import Repositories from '../Screens/Repositories';
import TableClients from '../Screens/Tables/Clients';
import TableEmployee from '../Screens/Tables/Employee';
import TableProducts from '../Screens/Tables/Products';
import Todo from '../Screens/Todo';
import Works from '../Screens/Works';


const GetRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/dashboards" element={<Dashboards/>}/>
          <Route path="/email" element={<Mail/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/repositories" element={<Repositories/>}/>
          <Route path="/table-clients" element={<TableClients/>}/>
          <Route path="/table-products" element={<TableProducts/>}/>
          <Route path="/table-employee" element={<TableEmployee/>}/>
      </Routes>
  );
}

export default GetRoutes;