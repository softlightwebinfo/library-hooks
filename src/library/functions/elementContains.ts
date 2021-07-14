/**
 * @param { element } parent
 * @param { element } child
 * Example: elementcontains( document.querySelector ('head'),  document.querySelector('title')); // true
 */
export const elementContains = (parent: HTMLElement, child: HTMLElement) => parent !== child && parent.contains(child);
