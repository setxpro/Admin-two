import React from 'react';
import GetRoutes from '../../Routes';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
         <Content>
          <GetRoutes/>
         </Content>
      </Container>
  );
}

export default Main;