import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  modeDropdown: boolean;
}

const DropdownTable: React.FC<Props> = ({ modeDropdown }) => {
  return (
     <Container mode={modeDropdown}>
        <Link to='table-clients'><li>Clients</li></Link>
        <Link to='table-products'><li>Products</li></Link>
        <Link to='table-employee'><li>employee</li></Link>
     </Container>
  );
}

export default DropdownTable;