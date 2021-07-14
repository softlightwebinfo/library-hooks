import {$id} from "./id";
import {trim} from "../trim";

export const $setInputValue = (element: any, value: string) => {
    element.hasChanged = false;
    element.originalValue = value;
    switch (element.type) {
        case "hidden":
        case "text":
        case "textarea":
        case "select-one":
        case "button":
            element.value = value;
            break;
        case "checkbox":
            element.checked = value != "0";
            element.value = value;
            break;
        case "radio":
            element.checked = value != "0";
            element.value = value;
            break;
        case "select-multiple":
            for (let i = 0; i < element.length; i++) {
                if (trim(element[i].value) == trim(value)) {
                    element[i].selected = true;
                }
            }
            break;
        default:
            throw "element not input";
    }
};
export const $getInputValue = (element: any) => {
    switch (element.type) {
        case "hidden":
        case "text":
        case "textarea":
        case "checkbox":
        case "radio":
        case "select-one":
            return trim(element.value);
        case "select-multiple":
            let values = [];
            for (let i = 0; i < element.length; i++) {
                if (element[i].selected) {
                    values.push(trim(element[i].value));
                }
            }
            return values;
    }
};
export const $setValue = (element: any, value: any, html?: boolean) => {
    value = trim(value.toString());
    switch (element.tagName) {
        case "INPUT":
        case "TEXTAREA":
            $setInputValue(element, value);
            break;
        default:
            return html ? element.innerHTML : element.innerText;
    }
};
export const $getValue = (element: any, html?: boolean) => {
    switch (element.tagName) {
        case "INPUT":
        case "TEXTAREA":
            return $getInputValue(element);
        default:
            return html ? element.innerHTML : element.innerText;
    }
};
export const $setValueById = (id: string, value: any, html?: boolean) => {
    $setValue($id(id), value, html);
};
export const $getValueById = (id: string, value: any) => {
    $getValue($id(id), value);
};