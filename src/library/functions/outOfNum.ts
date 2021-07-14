/**
 * @param { number } val Number entered
 * @param { number } maxNum Numerical limit
 */
export const outOfNum = (val: number, maxNum: number) => {
    val = val ? val : 0;
    return val > maxNum ? `${maxNum}+` : val;
};