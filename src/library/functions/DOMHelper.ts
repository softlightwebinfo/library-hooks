export const DOMHelper = {
    isElement: (node: HTMLElement) => {
        return node?.nodeType && typeof node?.nodeName === 'string';
    }
};