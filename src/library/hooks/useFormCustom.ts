import {ChangeEvent, FormEvent, useState} from "react";
import {ErrorRecord, Validations} from "../interfaces/IUseForm";

export const useFormCustom = <T extends Record<keyof T, any> = {}>(options?: {
    validations?: Validations<T>;
    initialValues?: Partial<T>;
    onSubmit?: () => void;
    onChange?: (key: keyof T, value: any) => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({} as ErrorRecord<T>);

    // Needs to extend unknown so we can add a generic to an arrow function
    const handleChange = <S extends unknown>(
        key: keyof T,
        sanitizeFn?: (value: string) => S
    ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
        const value = sanitizeFn?.(e.target.value) ?? e.target.value;
        options?.onChange?.(key, value);
        setData({
            ...data,
            [key]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors = {} as ErrorRecord<T>;
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({} as ErrorRecord<T>);

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
    };
};