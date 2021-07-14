export const typeofUndefined = (value: any) => typeof (value) == "undefined" || value == null;
export const typeofObject = (value: any) => typeof (value) == "object" && value.constructor == Object;
export const typeofString = (value: any) => typeof (value) == "string" && value.constructor == String;
export const typeofBoolean = (value: any) => typeof (value) == "boolean" && value.constructor == Boolean;
export const typeofNumber = (value: any) => typeof (value) == "number" && value.constructor == Number;
export const typeofFunction = (value: any) => typeof (value) == "function" && value.constructor == Function;
export const typeofArray = (value: any) => typeof (value) == "object" && value.constructor == Array;
