import {useState} from "react";

export function useCounter(val: number, step: number) {
    const [count, setCount] = useState(val);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const handlerCount = (evt: any) => setCount(Number(evt.target.value));

    return [count, increment, decrement, {setCount, handlerCount}];
}
