import React from 'react';
import '../css/input.css';

interface InputProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "text" | "password" | "email" | "date" | "number";
    placeholder?: string;
    value?: string;
    onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({type = "text", placeholder = "", ...props}: InputProps) => {
    return (
        <input
            type={type}
            className={"Input"}
            {...props}
        />
    );
};
