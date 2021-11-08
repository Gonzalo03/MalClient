import { shallow } from 'enzyme'
import { UserDisplay } from '../../components/UserDisplay';
import { useUser } from '../../hook/useUser';
import { userFix } from '../___fixtures___/userFix';
jest.mock( '../../hook/useUser');


describe('Pruebas en el componente userDisplay', ()=>{


    const tag  = "MauroDT";

    const deleteUser = jest.fn();



    test('Debe hacer match con el snapshot', () => {
   
        useUser.mockReturnValue({
            lading : false,
            data : userFix, 
            err : null
        });
    
        const wrapper = shallow( <UserDisplay tag={tag} deleteUser={deleteUser} /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MenuStats').length).toBe(2);
        expect(wrapper.find('ListCardManime').length).toBe(2);

    });

    test('Debe simular el clikc del borrado de usuario', () => {
   
        useUser.mockReturnValue({
            lading : false,
            data : userFix, 
            err : null
        });
        
        const wrapper = shallow( <UserDisplay tag={tag} deleteUser={deleteUser} /> );

        wrapper.find('button').simulate('click');

        expect(deleteUser).toHaveBeenCalled();


    });


});




