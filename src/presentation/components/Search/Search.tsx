/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useCallback } from "react";
import User from "../User";
import { UserType } from "../../../entities/UsersState";
import debounce from "lodash/debounce";

const Search: FC<{ users: UserType[]; viewSearch: boolean }> = ({
  users,
  viewSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);

  const filterUsers = (term: string) => {
    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.phone.toLowerCase().includes(term)
      );
    });
    setFilteredUsers(filtered);
  };

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      filterUsers(term);
    }, 300),
    [users]
  );

  const handleSearch = (event: { target: { value: string } }) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <>
      {viewSearch && (
        <div className="w-full shadow-xl p-4">
          <h3 className="text-2xl font-bold mb-4 flex-1">Busqueda</h3>

          <input
            type="text"
            placeholder="Buscar usuarios..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded mb-4"
          />

          <ul>
            {searchTerm &&
              filteredUsers?.map((user, index) => {
                return (
                  <li className="py-4" key={`${index}-${user?.email}-p`}>
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
            {filteredUsers.length === 0 && <li>No Encontrado</li>}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
