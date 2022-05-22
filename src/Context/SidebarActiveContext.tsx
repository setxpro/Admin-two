import { createContext, useState } from "react";
import { ContextActiveSidebar, ContextChildrenProps } from "../Types/ContextType";

export const SidebarActiveContext = createContext({} as ContextActiveSidebar);

export const SidebarActiveProvider = ({children}:ContextChildrenProps) => {

    const [home, setHome] = useState(true);
    const [dashboard, setDashboard] = useState(false);
    const [todo, setTodo] = useState(false);
    const [email, setEmail] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const [table, setTable] = useState(false);
    const [works, setWorks] = useState(false);
    const [repository, setRepository] = useState(false);

    const toggleHome = () => {
        setHome(true);
        setDashboard(false);
        setTodo(false);
        setEmail(false);
        setCalendar(false);
        setTable(false);
        setWorks(false);
        setRepository(false);
    }
    const toggleDash = () => {
        setDashboard(true);
        setHome(false);
        setTodo(false);
        setEmail(false);
        setCalendar(false);
        setTable(false);
        setWorks(false);
        setRepository(false);
    }
    const toggleTodo = () => {
        setTodo(true);
        setHome(false);
        setDashboard(false);
        setEmail(false);
        setCalendar(false);
        setTable(false);
        setWorks(false);
        setRepository(false);
    }

    const toggleEmail = () => {
        setEmail(true);
        setDashboard(false);
        setHome(false);
        setTodo(false);
        setCalendar(false);
        setTable(false);
        setWorks(false);
        setRepository(false);

    }
    const toggleCalendar = () => {
        setCalendar(true);
        setDashboard(false);
        setHome(false);
        setTodo(false);
        setEmail(false);
        setTable(false);
        setWorks(false);
        setRepository(false);

    }
    const toggleTable = () => {
        setTable(true);
        setDashboard(false);
        setHome(false);
        setTodo(false);
        setEmail(false);
        setCalendar(false);
        setWorks(false);
        setRepository(false);
    }
    const toggleWorks = () => {
        setWorks(true);
        setDashboard(false);
        setHome(false);
        setTodo(false);
        setEmail(false);
        setCalendar(false);
        setTable(false);
        setRepository(false);
    }

    const toggleRepository = () => {
        setRepository(true);
        setWorks(false);
        setDashboard(false);
        setHome(false);
        setTodo(false);
        setEmail(false);
        setCalendar(false);
        setTable(false);
    }

    return (
        <SidebarActiveContext.Provider value={{
            home,
            dashboard,
            todo,
            email,
            calendar,
            table,
            works,
            repository,
            toggleHome,
            toggleDash,
            toggleTodo,
            toggleEmail,
            toggleCalendar,
            toggleTable,
            toggleWorks,
            toggleRepository
        }}>
            {children}
        </SidebarActiveContext.Provider>
    )
}