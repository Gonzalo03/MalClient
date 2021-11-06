import { useEffect, useState } from "react"
import { request } from "../helpers/request"

export const useUser = (tag) => {
    
    const [user, setUser] = useState({
        loading:true,
        data:null,
        err:null
    })
    
    useEffect(
        ()=>request('user', tag)
        .then(data=>setUser({
                loading:false,
                data,
                err:null
            }))
        .catch(err=>setUser({
                loading:false,
                data:null,
                err
            }))
    , [tag])

        return user;

}
