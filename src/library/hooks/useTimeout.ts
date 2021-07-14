import {useCallback, useEffect, useRef} from 'react';

export interface UseTimeoutFnReturn {
    clear: () => void;
    reset: () => void;
}

/**
 * A timer hook
 * @param fn Timer callback function
 * @param ms Milliseconds of the timer
 * @param open Whether to open the timer
 */
export function useTimeout(fn: () => void, ms = 0, open = true): UseTimeoutFnReturn {
    const timeout: any = useRef<ReturnType<typeof setTimeout>>();

    const clear = useCallback(() => {
        timeout.current && clearTimeout(timeout.current);
    }, []);

    const set = useCallback(() => {
        timeout.current = open && setTimeout(() => fn?.(), ms);
    }, [ms, fn, open]);

    useEffect(() => {
        set();
        return clear;
    }, [fn, ms, open, clear, set]);

    return {clear, reset: set};
}
