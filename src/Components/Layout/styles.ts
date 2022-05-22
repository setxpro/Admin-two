import styled from 'styled-components';

export const Container = styled.div<{mode:boolean}>`
    height: 100vh;
    display: grid;
    grid-template-columns: ${props => props.mode ? '150px' : '250px'};
    
    grid-template-rows: 60px;
    grid-template-areas: 
        'SB NB'
        'SB MA'
    ;
`;
