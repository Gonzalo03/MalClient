import { shallow } from "enzyme";
import React from "react";
import { ManAnimeCard } from "../../components/ManAnimeCard";
import { useManime } from "../../hook/useManime";
import { manAnimeFix } from "../___fixtures___/manAnimeFix";

jest.mock("../../hook/useManime");

describe("Pruebas en el componente ManAnimeCard", () => {
  const manAnime = {
    mal_id: 6544,
  };

  const context = "manga";

  const dispatchAnime = jest.fn();
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  });

  test("Debe hacer match con el snapshot", () => {
    useManime.mockReturnValue({
      loading: false,
      data: manAnimeFix,
      err: null,
    });

    const wrapper = shallow(
      <ManAnimeCard
        manAnime={manAnime}
        context={context}
        dispatchManime={dispatchAnime}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar a la función dispatchManAnime", () => {
    useManime.mockReturnValue({
      loading: false,
      data: manAnimeFix,
      err: null,
    });

    const wrapper = shallow(
      <ManAnimeCard
        manAnime={manAnime}
        context={context}
        dispatchManime={dispatchAnime}
      />
    );

    expect(dispatchAnime).toBeCalledWith(expect.objectContaining({type : context , payload : manAnimeFix.score}));
  });
});
