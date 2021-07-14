/**
 * @param {array} arr
 */
export const arrScrambling = (arr: any[]) => {
    let array = arr;
    let index = array.length;
    while (index) {
        index -= 1;
        let randomIndex = Math.floor(Math.random() * index);
        let middleware = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = middleware
    }
    return array
};