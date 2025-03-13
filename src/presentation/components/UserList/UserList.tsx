import { useEffect, useState } from "react";
import { useCreateUsers } from "../../../infrastructure/zustand/createUsers";
import User from "../User/User";
import getUsers from "../../../infrastructure/repository/getUsers";
import Search from "../Search/Search";

function UserList() {
  const { users, setUser } = useCreateUsers();
  const [viewSearch, setViewSearch] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await getUsers();
      if (data) setUser(data);
    };
    getData();
  }, [setUser]);

  return (
    <div className="container mx-auto p-2">
      <div className="flex items-center gap-2 py-2">
        <h2 className="text-2xl font-bold mb-4 flex-1">Usuarios Registrados</h2>
        <div>
          <button
            onClick={() => setViewSearch(!viewSearch)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {!viewSearch ? "Buscar" : "Cerrar"}
          </button>
        </div>
      </div>
      <Search users={users} viewSearch={viewSearch} />

      <section className="overflow-y-auto max-h-[700px]">
        <ul className="divide-y divide-gray-200">
          {users?.map((user, index) => {
            return (
              <li className="py-4" key={index}>
                <User
                  endHour={user?.endHour}
                  startHour={user?.startHour}
                  name={user?.name}
                  email={user?.email}
                  address={user?.address}
                  phone={user?.phone}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default UserList;
