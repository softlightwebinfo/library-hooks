import {useState} from "react";

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signIn = (email: string, password: string) => {
        return fetch("auth", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
            .then(rs => rs.json())
            .then((response: any) => {
                setUser(response);
                return response;
            });
    };

    const signUp = (email: string, password: string) => {
        return fetch("auth/register", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
            .then(rs => rs.json())
            .then((response: any) => {
                setUser(response);
                return response;
            });
    };

    const signOut = () => {
        return true;
    };

    const sendPasswordResetEmail = (email: string) => {
        return fetch("auth/reset", {
            method: "POST",
            body: JSON.stringify({email})
        }).then(rs => rs.json())
    };

    const confirmPasswordReset = (code: string, password: string) => {
        return fetch("auth/confirm", {
            method: "POST",
            body: JSON.stringify({code, password})
        }).then(rs => rs.json())
    };

    return {
        user,
        signIn,
        signUp,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset,
    };
};