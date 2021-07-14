/**
 * @param { function } func

 * @param { number } wait Delay execution milliseconds

 * @param { boolean } immediate  true Table is executed immediately, false table is not executed immediately
 */
export function debounce(func: Function, wait: number, immediate?: boolean) {
    let timeout: NodeJS.Timeout | null;
    return function () {
        // @ts-ignore
        let context: any = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }

    }
}