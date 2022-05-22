import styled from 'styled-components';

import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoIosRadioButtonOn } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';
import { RiTodoFill } from 'react-icons/ri';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { BsTable } from 'react-icons/bs';

export const Container = styled.div`
    grid-area: SB;
    transition: all 1s ease;
    background: ${props => props.theme.colors.sidebar};
    border-right: 1px solid ${props => props.theme.colors.border};
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
export const ContentImg = styled.div<{openWidthMenu: boolean}>`
    width: 100px;
    img {
            width: ${props => props.openWidthMenu ? '80px' : '120px'};
            height: ${props => props.openWidthMenu ? '80px' : '120px'};
            border-radius: 50%;
    }
   
    position: relative;
    ::after {
        width: ${props => props.openWidthMenu ? '20px' : '30px'};
        height: ${props => props.openWidthMenu ? '20px' : '30px'};
        background: green;
        content: '';
        position: absolute;
        bottom: 0;  
        right: ${props => props.openWidthMenu ? '20px' : '0px'};
        border-radius: 50%;
        transition: all 1s ease;
        border: 4px solid ${props => props.theme.colors.sidebar};
    }
`;
export const ContentName = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;

   h2 {
    font-size: 1.3em;
    color: ${props => props.theme.colors.text};
   }

   h3 {
    font-size: 1em;
    color: ${props => props.theme.colors.textLight};
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
       /* width: 3px; */

       display: none;
   }
   /* ::-webkit-scrollbar-track {
       background: rgba(0, 0, 0, 0.2);
   }
   ::-webkit-scrollbar-thumb {
       background: rgba(0, 0, 0, 0.4);
   } */
`;

export const NavArea = styled.nav`
   

    ul {
        display: flex;
        flex-direction: column;
        

            a {
                font-size: 1rem;
                margin-bottom: 5px;
                padding: .2rem 10px;

                color: ${props => props.theme.colors.text};
                transition: all 1s ease;

                display: flex;
                align-items: center;
                gap: 1rem;
                width: 100%;

                border-left: 3px solid transparent;

                &:hover, &:focus {
                    background: ${props => props.theme.colors.hover};
                    border-left: 3px solid #F00;
                }
            
                li {
                    list-style: none;
                }
            }
            .active {
                background: ${props => props.theme.colors.hover};
                border-left: 3px solid #F00;
            }
    }
`;

export const BtnCircleVoid = styled(IoIosRadioButtonOff)`
    cursor: pointer;
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
`;
export const BtnCircleFull = styled(IoIosRadioButtonOn)`
    cursor: pointer;
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
`;


// Icons Menu

export const HomeIcon = styled(AiFillHome)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    width: ${props => props.mode ? '' : ''};
`;

export const DashboardIcon = styled(AiOutlineAreaChart)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const TodoIcon = styled(RiTodoFill)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const EmailMenuIcon = styled(MdEmail)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const CalendarIcon = styled(AiFillCalendar)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const TableIcon = styled(BsTable)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const RepositoryIcon = styled(RiGitRepositoryFill)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;
export const WorksIcon = styled(MdWork)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
`;