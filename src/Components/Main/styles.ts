import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MA;
    border: 1px solid #3333;
    border-left: 0;
    border-top: 0;
    background: ${props => props.theme.colors.primary};
    padding: 1rem;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    transition: all 1s ease;
    color: ${props => props.theme.colors.text};
`;
export const Content = styled.div`
   height: 100vh;
   background: ${props => props.theme.colors.navbar};
   transition: all 1s ease;
`;
