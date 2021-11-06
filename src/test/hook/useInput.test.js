import { renderHook, act } from '@testing-library/react-hooks'
import { useInput } from '../../hook/useInput'


describe('Pruebas en useInput Hook', () => {
    

    test('Debe contener un string vacio', () => {
        
        const { result } = renderHook(useInput)

        const [ input ] = result.current;

        expect(input).toBe('');

    });

    test('Debe cambiar el valor del input', () => {
    
        const target = {
            value :  "MauroDT"
        };

        const { result } = renderHook(useInput)

        const [ , handleInputChange ] = result.current;

        act(()=>handleInputChange({target}));
        
        const [ input ] = result.current;
        
        expect(input).toBe(target.value);

    })

    test('Debe reinciar el valor del Input', () => {
    
        const target = {
            value :  "MauroDT"
        };

        const { result } = renderHook(useInput)

        const [ , handleInputChange, resetInput ] = result.current;

        act(()=>{
            handleInputChange({target});
            resetInput();
        
        });
        
        const [ input ] = result.current;
        
        expect(input).toBe('');

    })
    
    

})
