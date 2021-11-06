import { avgReducer } from "../../reducer/avgReducer"
import { avgReducerFix } from "../___fixtures___/avgreducerFix"

describe('Pruebas en el avgReducer', () => {
    

    test('Debe retornar el valor por defecto', () => {
    
        const avg = avgReducer(avgReducerFix, {});

        expect(avg).toEqual(avgReducerFix);

    });

    test('Debe de agregarse un valor en anime', () => {

        const payload = 5.4;
        
        const avg = avgReducer(avgReducerFix, {type : 'anime', payload});

        expect(avg.anime).toEqual([...avgReducerFix.anime, payload]);

    });

    test('Debe de agregarse un valor en manga', () => {

        const payload = 8.2;
        
        const avg = avgReducer(avgReducerFix, {type : 'manga', payload});

        expect(avg.manga).toEqual([...avgReducerFix.manga, payload]);

    });
    
    

})
