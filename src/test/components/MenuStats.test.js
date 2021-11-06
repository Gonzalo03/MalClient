import { shallow } from "enzyme"
import { MenuStats } from "../../components/MenuStats"
import { userFix } from "../___fixtures___/userFix"

describe('Pruebas en el componente MenuStats', () => {
   
    const wrapper = shallow(<MenuStats stats={userFix.anime_stats}/>)

    test('Debe hacer match con el snapshot', () => {
        
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe de tener todos los stats', () => {
        
        expect(wrapper.find('CustomProgressBar').length).toBe(6);

    })
    

})
