import { UserDisplay } from "./components/UserDisplay";
import { useInput } from "./hook/useInput";
import { useSetUsers } from "./hook/useSetUsers";

import "./index.css";
const App = () => {
  
  const { users, addUser, deleteUser } = useSetUsers();

  const [input, handleInput, resetInput] = useInput();

  const handleSubmit = (e) => {

    e.preventDefault();

    addUser(input);

    resetInput();
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 text-center">
        <div className="bg-primary text-custom-base mt-8 md:shadow">

          <h1 className="text-6xl font-yal">Mal Match</h1>

          <p className="text-3xl mt-5 font-sch">
            Demuestra quien es GOD y quien es ZzzzzZ
          </p>
        </div>

        <div className="w-full max-w-xs mx-auto mt-10">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-custom-second text-sm font-bold mb-2"
                htmlFor ="usuario"
              >
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="usuario"
                name="usuario"
                onChange={handleInput}
                value={input}
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
                type="submit"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-row-2 flex mt-5">

        {users[0] && <UserDisplay tag={users[0]} deleteUser={deleteUser} />}

        

        {users[1] && <UserDisplay tag={users[1]} deleteUser={deleteUser} />}
        

      </div>
      
    </div>
  );
};

export default App;
