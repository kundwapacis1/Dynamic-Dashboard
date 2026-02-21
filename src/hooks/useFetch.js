import { useEffect, useState } from "react";


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        let isMounted = true;

        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return res.json();
        })
        .then((result) => {
            if (isMounted) {
                setData(result);
                setLoading(false);
            }
        })
        .catch((err) => {
            if (isMounted) {
                setError(err.message);
                setLoading(false);
            }
        });
        return () => {
            isMounted =false;
        };
    }, [url]);

    return { data, loading, error };
}