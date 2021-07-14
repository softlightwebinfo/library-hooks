/**
 * @param {*} item
 * @param { array } data
 */
export function inArray(item: any, data: any[]) {
    for (let i = 0; i < data.length; i++) {
        if (item === data[i]) {
            return i;
        }
    }
    return -1;
}