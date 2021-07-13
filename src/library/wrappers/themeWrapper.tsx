import React, {useState} from "react";
import {ThemeContext} from "../context";

export const ThemeWrapper = ({children}: any) => {
    const [theme, changeTheme] = useState("dark");

    function handleThemeChange(theme: string) {
        changeTheme(theme);
    }

    const context = {
        theme,
        handleThemeChange
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};