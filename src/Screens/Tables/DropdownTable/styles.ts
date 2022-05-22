import styled from 'styled-components';

export const Container = styled.div<{mode:boolean}>`
    transition: all 1s ease;
    height: ${props => props.mode ? '100px' : '0px'};
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    
    a {
        color: #333;

        li {
            font-size: 1rem;
            padding: .1rem 10px;

            &:hover {
                background: darkcyan;
            }
        }
    }
`;
