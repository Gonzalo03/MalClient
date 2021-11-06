import { useEffect, useState } from "react"
import { request } from "../helpers/request"

export const useManime = (animeTag, context) => {

    const [manime, setManime] = useState({
        loading : true,
        data : null, 
        err : null
    })

    useEffect(
        ()=>request(context, animeTag)
        .then(data=>setManime({
            loading:false,
            data,
            err:null
        }))
        .catch(err=>setManime({
            loading:false,
            data:null,
            err
        }))
    , [animeTag, context])

    return manime;
}
