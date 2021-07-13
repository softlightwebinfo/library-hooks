import {useLayoutEffect} from "react";

export function useLockBodyScroll() {
    useLayoutEffect((): any => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = originalStyle);
    }, []);
}