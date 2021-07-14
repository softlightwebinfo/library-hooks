export const escapeHTML = (str: string) => {
    str.replace(
        /[&<>'"]/g,
        (tag: string) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
};