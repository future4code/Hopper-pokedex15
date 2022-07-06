import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData(type, url){
    const [data, setData] = useState(type)

    useEffect(() => {
        axios.get(url)
        .then((response) => setData(response.data.results))
        .catch((err) => console.log(err.response))
    }, [url])

    return data
}
