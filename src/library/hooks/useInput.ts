import {useCallback, useState} from "react";

export const useInput = (value?: string) => {
    const [state, setState] = useState(value);

    const onChange = useCallback((evt) => {
        setState(evt.target.value);
    }, []);

    return [state, onChange]
}