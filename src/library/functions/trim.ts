export const trim = (value: any) => value.toString().replace(/^\s+|\s+$/g, '');

/**
 * @param { string } str Pending string
 * @param  { number } type Remove space type 1 - all spaces 2 - before and after spaces 3 - before and after spaces 4 - after spaces default to 1
 */
export function trimSelective(str: string, type: number = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
}