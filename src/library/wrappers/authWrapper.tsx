import {authContext} from "../context";
import {useProvideAuth} from "../hooks";
import React from 'react';

export function AuthWrapper({children}: any) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}