export const $tag = (tagName?: string, parent?: any) => {
    if (tagName) {
        if (parent) {
            return parent.getElementsByTagName(tagName);
        }
        return document.getElementsByTagName(tagName);
    }

    return [];
};