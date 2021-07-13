import {useCallback, useState} from "react";

// Parameter is the boolean, with default "false" value
export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(state => !state), []);
    const on = useCallback(() => setState(true), []);
    const off = useCallback(() => setState(false), []);

    return [state, {toggle, on, off}]
}
