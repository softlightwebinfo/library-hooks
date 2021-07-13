import {useLayoutEffect} from "react";

/**
 useTheme({
    "button-padding": "16px",
    "button-font-size": "14px",
    "button-border-radius": "4px",
    "button-border": "none",
    "button-color": "#FFF",
    "button-background": "#6772e5",
    "button-hover-border": "none",
    "button-hover-color": "#FFF",
 });
 * @param theme
 */
export const useTheme = (theme: any) => {
    useLayoutEffect(
        () => {
            for (const key in theme) {
                // Update css variables in document's root element
                document.documentElement.style.setProperty(`--${key}`, theme[key]);
            }
        },
        [theme]
    );
};