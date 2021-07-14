export const generateRandom = () => {
    const date = new Date();

    return date.getFullYear().toString() + date.getMonth().toString() + date.getDay().toString()
        + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString()
        + date.getMilliseconds().toString()
};
export const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const randomNumInteger = function (min: number, max: number) {
    switch (arguments.length) {
        case 1:
            return parseInt((Math.random() * min + 1).toString(), 10);
        case 2:
            return parseInt((Math.random() * (max - min + 1) + min).toString(), 10);
        default:
            return 0
    }
};

export const randomHexColor = () => {
    let str = '#';
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        let index = Number.parseInt((Math.random() * 16).toString());
        str += arr[index]
    }
    return str;
};

export const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

export function guid() {
    return '_' + Math.random().toString(36).substr(2, 12);
}