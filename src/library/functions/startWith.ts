export const startWith = (value: string, str: string, ignoreCase?: boolean) => {
    return ignoreCase ? value.toLowerCase().charAt(0) == str.toLowerCase() : value.charAt(0) == str;
};
