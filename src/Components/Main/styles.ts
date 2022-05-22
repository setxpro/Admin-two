import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MA;
    border: 1px solid #3333;
    border-left: 0;
    border-top: 0;
    background: black;
    padding: 1rem;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Content = styled.div`
   height: 100vh;
   background: cyan;
`;
