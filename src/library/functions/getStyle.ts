/**
 * @param { element} el  Element node
 * @param { string } ruleName  Specifies the name of the element
 */
export const getStyle = (el: any, ruleName: any) => getComputedStyle(el)[ruleName];