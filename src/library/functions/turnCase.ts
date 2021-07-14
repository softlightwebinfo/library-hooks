/**
 * @param { string } str String to be converted
 * @param { number } type 1-All capital 2 - all lowercase 3 - initial capital other - no conversion
 */
export const turnCase = (str: string, type: number) => {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
};