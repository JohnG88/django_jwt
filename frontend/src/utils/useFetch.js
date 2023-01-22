import { useState, useEffect } from "react";

// have to use 'use' in order to create custom hooks

export const useFetch = (url, options) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        getData();
    }, [url]);

    // return state value
    return { data };
};
