import { renderHook } from '@testing-library/react-hooks'
import { useUser } from "../../hook/useUser";

describe('Pruebas en el hook useUser', () => {
   
    jest.setTimeout(10000)

    const userTag = 'MauroDT';

    test('Debe retornar un usuario vacio', async() => {

        const { result, waitForNextUpdate } = renderHook(()=>useUser(userTag))

        expect(result.current.data).toBe(null);
        expect(result.current.err).toBe(null);
        expect(result.current.loading).toBeTruthy();

        await waitForNextUpdate({timeout : 5000})

    })
    
    test('Debe retornar un usuario', async() => {

        const { result, waitForNextUpdate } = renderHook(()=>useUser(userTag))

        await waitForNextUpdate({timeout : 5000})
        
        expect(result.current.data.username).toBe(userTag);
        expect(result.current.err).toBe(null);
        expect(result.current.loading).toBeFalsy();


    })
    
    test('Debe retornar un error', async() => {

        const fail = 'not user';

        const { result, waitForNextUpdate } = renderHook(()=>useUser(fail))

        await waitForNextUpdate({timeout : 5000})
        
        expect(result.current.data.type).toBe("HttpException");
        expect(result.current.err).toBe(null);
        expect(result.current.loading).toBeFalsy();


    })
    
    
});
