import {typeofUndefined} from "../typeof";
import {$getValue, $setValue} from "./value";

export const $id = (id: string) => {
    let element: any | null = null;

    if (typeofUndefined(id)) {
        return null;
    }

    element = document.getElementById(id);

    if (typeofUndefined(element.setValue)) {
        element.setValue = function (value: string, html?: boolean) {
            $setValue(element, value, html);
        };
    }

    if (typeofUndefined(element.getValue)) {
        element.getValue = function (html?: boolean) {
            $getValue(element, html);
        };
    }

    return element;
};
