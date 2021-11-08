import { mount } from "enzyme"
import App from "../App"
import { useSetUsers } from "../hook/useSetUsers";
import { userFix } from "./___fixtures___/userFix";
jest.mock("../hook/useSetUsers")

describe('Pruebas generales en el archivo App', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};

    /** useSetUsers */

    const deleteUser = jest.fn();
    const addUser = jest.fn();
    const users = [userFix,userFix];

    useSetUsers.mockReturnValue({
        users,
        addUser,
        deleteUser
    });
    
    const wrapper = mount(<App />)

    test('Debe hacer match con el snapshot', () => {
        

        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe de tener la cantidad de Usuarios en pantalla', () => {
        
        expect(wrapper.find('UserDisplay').length).toBe(users.length);
    })
    

    test('Debe de llamar al onSubmit del formulario', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}})

    })
    

})
