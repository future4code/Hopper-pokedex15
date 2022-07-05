import { useEffect, useState } from "react";

export function usePage(pagina){
    const [page, setPage] = useState(pagina)

    useEffect(() => {
        setPage(pagina)
    }, [pagina])

    return page
}