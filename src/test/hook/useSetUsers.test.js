import { renderHook, act } from '@testing-library/react-hooks'
import { useSetUsers } from '../../hook/useSetUsers'

describe('Pruebas en useSetUsers', () => {
    
    test('Debe retonar el hook por defecto', () => {
        
        const { result } = renderHook(useSetUsers);

        expect(result.current.users).toEqual([]);

    })

    test('Debe añadir un usuario a la lista', () => {
        
        const user = "MauroDT";

        const { result } = renderHook(useSetUsers);

        const { addUser, users : userStatic } = result.current;

        act(()=>addUser(user))

        expect(result.current.users).toEqual([...userStatic, user]);

    })
    test('Debe eliminar un usuario a la lista', () => {
        
        const user = "MauroDT";

        const { result } = renderHook(useSetUsers);

        const { addUser, users : userStatic, deleteUser } = result.current;

        act(()=>addUser(user))

        act(()=>deleteUser(user))

        expect(result.current.users).toEqual(userStatic);

    })
    

})
