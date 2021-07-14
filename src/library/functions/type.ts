/**
 * @param {*} target
 */
export function type(target: any) {
    let ret = typeof (target);
    let template: any = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": 'string-object'
    };

    if (target === null) {
        return 'null';
    } else if (ret == "object") {
        let str = Object.prototype.toString.call(target);
        return template[str];
    }
    return ret;
}