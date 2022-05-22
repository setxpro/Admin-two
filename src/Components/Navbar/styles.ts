import styled from 'styled-components';

import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiTodoLine} from 'react-icons/ri';
import {FiBell} from 'react-icons/fi';
import {MdLightMode} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';

export const Container = styled.div`
    grid-area: NB;
    border: 1px solid ${props => props.theme.colors.border};
    border-left: 0;
    height: 60px;
    padding: 1rem;
    position: sticky;
    top: 0;

    z-index: 999;
    transition: all 1s ease;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
`;
export const ContentAreaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ContentAreaRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ContentSearchArea = styled.div`

`;
export const ContentBell = styled.div`
    
`;
export const AreaToggleTheme = styled.div``;

// Icons
export const MailIcon = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;
export const TodoIcon = styled(RiTodoLine)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;
export const CalendarIcon = styled(AiOutlineCalendar)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;
export const BellIcon = styled(FiBell)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;
export const DarkIcon = styled(MdLightMode)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;
export const LightIcon = styled(MdOutlineLightMode)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.3rem;
    cursor: pointer;
`;

