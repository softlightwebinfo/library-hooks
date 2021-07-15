import {useCallback, useState} from "react";
import {TRsUseToggle} from "../interfaces/useToggle";
// Parameter is the boolean, with default "false" value
export const useToggle = (initialState = false): TRsUseToggle => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(state => !state), []);
    const on = useCallback(() => setState(true), []);
    const off = useCallback(() => setState(false), []);

    return [state, {toggle, on, off}]
}