export const generateRandom = () => {
    const date = new Date();

    return date.getFullYear().toString() + date.getMonth().toString() + date.getDay().toString()
        + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString()
        + date.getMilliseconds().toString()
};