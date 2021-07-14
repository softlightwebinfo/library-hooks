import * as helpers from 'dom-lib';

export const DOMHelper = {
    ...helpers,
    isElement: (node: HTMLElement) => {
        return node?.nodeType && typeof node?.nodeName === 'string';
    }
};