import styled from 'styled-components';

import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoIosRadioButtonOn } from 'react-icons/io';

export const Container = styled.div`
    grid-area: SB;
    border: 1px solid #3333;
    transition: all 1s ease;
`;
export const ContentLogoName = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;
export const AreaLogo = styled.div`
    position: relative;
`;
export const ContentImg = styled.div`
    width: 100px;
    img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
    }
   
    position: relative;
    ::after {
        width: 30px;
        height: 30px;
        background: green;
        content: '';
        position: absolute;
        bottom: 0;  
        right: 10px;
        border-radius: 50%;
        border: 4px solid #FFF;// temporary
    }
`;
export const ContentName = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;

   h2 {
    font-size: 1.3em;
   }

   h3 {
    font-size: 1em;
   }

`;
export const ContentButtons = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;

`;
export const AreaMenu = styled.div`
 
   height: 454px;
   padding: .5rem 0;
   overflow-y: scroll;
   box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);

   ::-webkit-scrollbar {
       width: 3px;
   }
   ::-webkit-scrollbar-track {
       background: rgba(0, 0, 0, 0.2);
   }
   ::-webkit-scrollbar-thumb {
       background: rgba(0, 0, 0, 0.4);
   }
`;

export const NavArea = styled.nav`
   

    ul {
        display: flex;
        flex-direction: column;
        padding: 0 16px;

            a {
                font-size: 1rem;
                margin-bottom: 5px;
                padding: .2rem 10px;

                color: #333;

                &:hover {
                    background: darkcyan;
                }
            
                li {
                    list-style: none;
                
                }

            }
    }
`;

export const BtnCircleVoid = styled(IoIosRadioButtonOff)`
    cursor: pointer;
    color: #000;
    font-size: 1.5rem;
`;
export const BtnCircleFull = styled(IoIosRadioButtonOn)`
    cursor: pointer;
    color: #000;
    font-size: 1.5rem;
`;
