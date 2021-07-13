import {useEffect, useState} from "react";

export const useFetch = (url = '', options: any = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect((): any => {
        let isMounted = true;
        setLoading(true);

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                    setError(null);
                }
            })
            .catch(error => {
                if (isMounted) {
                    setError(error);
                    setData(null);
                }
            })
            .finally(() => isMounted && setLoading(false));

        return () => (isMounted = false);
    }, [url, options]);

    return {loading, error, data};
};