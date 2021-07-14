export const endsWith = (value: string, str: string, ignoreCase?: boolean) => {
    return ignoreCase ?
        value.toLowerCase().charAt(value.length - str.length) == str.toLowerCase() :
        value.charAt(value.length - str.length) == str;
};