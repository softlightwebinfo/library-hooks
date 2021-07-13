import {authContext} from "../context";
import {useContext} from "react";

export const useAuth = (): any => useContext(authContext);