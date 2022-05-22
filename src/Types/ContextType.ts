import { ReactNode } from "react";

export type ContextTypeProps = {
    openWidthMenu: boolean;
    toggleWidthMenu: () => void;
}

export type ContextChildrenProps = {
    children: ReactNode;
}