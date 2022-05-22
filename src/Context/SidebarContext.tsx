import { createContext, useState } from "react";
import { ContextChildrenProps, ContextTypeProps } from "../Types/ContextType";

export const SidebarContext = createContext({} as ContextTypeProps);

export const SidebarProvider = ({children} : ContextChildrenProps) => {

    const [openWidthMenu, setOpenWidthMenu] = useState(false);
    const toggleWidthMenu = () => setOpenWidthMenu(!openWidthMenu);
    

    return (
        <SidebarContext.Provider value={{ openWidthMenu, toggleWidthMenu }}>
            {children}
        </SidebarContext.Provider>
    )
}
