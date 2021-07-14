import {Bind} from "./bind";

export const toggleKeyBoard = () => {
    const toggle = new Bind(document, "keydown", disableKeyboardEvent);
    toggle.bind();
    return toggle.unbind;
}

export function disableKeyboardEvent(event: any) {
    event.keyCode = 0;
}