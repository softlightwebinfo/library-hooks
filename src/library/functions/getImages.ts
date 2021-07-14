export const getImages = (el: any, includeDuplicates = false) => {
    const images: any = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
    // @ts-ignore
    return includeDuplicates ? images : [...new Set(images)];
};