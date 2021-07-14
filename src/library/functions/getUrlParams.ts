export const getURLParameters = (url: string) =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a: any, v: any) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );