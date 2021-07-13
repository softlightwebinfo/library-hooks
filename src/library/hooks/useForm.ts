import {useState} from "react";

export const useForm = (callback?: any) => {
    const [values, setValues] = useState({});
    return {
        values,
        onChange: (e: any) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        },
        clear: () => {
            setValues({});
        },
        onSubmit: (e: any) => {
            e.preventDefault();
            callback?.();
        }
    };
};