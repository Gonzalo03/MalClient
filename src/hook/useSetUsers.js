import { useState } from "react";

export const useSetUsers = () => {

    const [users, setUsers] = useState([]);

    const addUser = (tag) => {
    
        setUsers([...users, tag]);
    
      };

    const deleteUser = (tag) => {

        console.log("epaaw")
        
        return setUsers(
            users.filter(user=>user!==tag)
        )

    }
    
    return {users, addUser, deleteUser};

}
