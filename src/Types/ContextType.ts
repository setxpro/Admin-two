import { Dispatch, ReactNode } from "react";

export type ContextTypeProps = {
    openWidthMenu: boolean;
    toggleWidthMenu: () => void;
}

export type ContextChildrenProps = {
    children: ReactNode;
}

export type ContextActiveSidebar = {
    toggleHome: () => void;
    toggleDash: () => void;
    toggleTodo: () => void;
    toggleEmail: () => void;
    toggleCalendar: () => void;
    toggleTable: () => void;
    toggleWorks: () => void;
    toggleRepository: () => void;

    home: boolean;
    dashboard: boolean;
    todo: boolean;
    email: boolean;
    calendar: boolean;
    table: boolean;
    works: boolean;
    repository: boolean;
}