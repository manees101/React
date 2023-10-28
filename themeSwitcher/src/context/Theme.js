import { useContext,createContext } from "react";

const Theme=createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
});

export const ThemeProvider=Theme.Provider;

export default function useTheme()
{
    return useContext(Theme);
}