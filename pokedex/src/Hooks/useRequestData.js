import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData(url){
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get(url)
        .then((res) => setData(res))
        .catch((err) => console.log(err))
    }, [url])

    return data
}
