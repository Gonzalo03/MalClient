import { shallow } from "enzyme";
import { ListCardManime } from "../../components/ListCardManime";
import { userFix } from "../___fixtures___/userFix";

describe("Pruebas de LisrCardManime", () => {
  const wrapper = shallow(
    <ListCardManime
      manAnimes={userFix.favorites.manga}
      context={"manga"}
      dipatchManime={jest.fn()}
    />
  );

  test("Debe hacer match con Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener la cantidad de elementos correcto', () => {
      
    const ul = wrapper.find('ManAnimeCard');

    expect(ul.length).toBe(userFix.favorites.manga.slice(0, 3).length)

  })
  

});
