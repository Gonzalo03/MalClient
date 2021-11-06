import { renderHook } from '@testing-library/react-hooks'
import { useManime } from '../../hook/useManime'
import { manAnimeFix } from '../___fixtures___/manAnimeFix'

describe('Pruebas en el useManime', () => {
    
    jest.setTimeout(100000)

    test('Debe de devolver un registro vacio ', async () => {
        
        const { result, waitForNextUpdate } = renderHook(()=>useManime(manAnimeFix.mal_id, manAnimeFix.type.toLowerCase()));

        expect(result.current.loading).toBeTruthy()
        expect(result.current.data).toBe(null)
        expect(result.current.err).toBe(null)

        await waitForNextUpdate({timeout : 5000});

    })
    
    
    test('Debe de devolver un registro', async () => {
        
        const { result, waitForNextUpdate } = renderHook(()=>useManime(manAnimeFix.mal_id, manAnimeFix.type.toLowerCase()));
        await waitForNextUpdate({timeout : 5000});

        expect(result.current.loading).toBeFalsy()
        expect(result.current.data.synopsis).toBe(manAnimeFix.synopsis)
        expect(result.current.err).toBe(null)


    })


    test('Debe de devolver un error', async () => {

        const manFail = 'abc';
        
        const { result, waitForNextUpdate } = renderHook(()=>useManime(manFail, manAnimeFix.type.toLowerCase()));
        await waitForNextUpdate({timeout : 5000});

        expect(result.current.loading).toBeFalsy()
        expect(result.current.data.type).toBe('HttpException')
        expect(result.current.err).toBe(null)


    })
    

})
