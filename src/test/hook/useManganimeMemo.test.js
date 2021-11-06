import { renderHook } from '@testing-library/react-hooks'
import { useManganimeMemo } from '../../hook/useManganimeMemo';

describe('Pruebas en useMangnimeMemo', () => {
    
    test('Debe retornar un promedio total de valores', () => {
        
        const scores = [8.7, 5.6, 7.1, 9.2];

        const { result } = renderHook(()=>useManganimeMemo(scores));

        expect(result.current).toBe(scores.reduce((acc, a)=> acc+a, 0)/scores.length)


    })
    

})
