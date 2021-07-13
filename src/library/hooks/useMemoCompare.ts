import {useEffect, useRef} from "react";

export const useMemoCompare = (next: any, compare: any) => {
    const previousRef = useRef();
    const previous = previousRef.current;
    const isEqual = compare(previous, next);
    useEffect(() => {
        if (!isEqual) {
            previousRef.current = next;
        }
    });
    return isEqual ? previous : next;
};