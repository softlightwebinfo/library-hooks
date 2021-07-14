export const toNumber = (value: string) => Number(value);
export const toBoolean = (value: string) => value.toString().toLowerCase() == "true" && value != "0";
