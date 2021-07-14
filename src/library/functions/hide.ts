/**
 * Example: hide( document.querySelectorAll ('img'))
 */
export const hideTag = (...el: any) => [...el].forEach(e => (e.style.display = 'none'));
/**
 *  //Example: hide all elements on the page?
 *  hide(document.querySelectorAll('img'))
 * @param el
 */
export const hide = (el: any) => Array.from(el).forEach((e: any) => (e.style.display = 'none'));