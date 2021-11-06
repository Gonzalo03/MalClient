import { shallow } from "enzyme"
import { CustomProgressBar } from "../../components/CustomProgressBar"


describe('Pruebas en CustomProgessBar', () => {
    
    
    test('Debe hacer match con el snapshot', () => {
        
        const wrapper = shallow( <CustomProgressBar percent={100} color="blue" text="hold" /> )

        expect(wrapper).toMatchSnapshot();
    })

    
    test('Debe mostrar el accent por default', () => {
        
        const wrapper = shallow( <CustomProgressBar percent={100} color="blue" text="hold" /> )

        const progress = wrapper.find('.progress');

        expect(progress.hasClass('bg-blue-500')).toBeTruthy();

    })

    

})
