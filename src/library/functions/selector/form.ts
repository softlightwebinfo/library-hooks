import {$id} from "./id";
import {typeofUndefined} from "../typeof";

export const $form = (id: string) => {
    let forms: any = {};

    const getForm = () => {
        let form = forms[id];

        if (typeofUndefined(form)) {
            form = $id(id);
            forms[id] = form;
        }

        return form;
    };

    return getForm();
}
