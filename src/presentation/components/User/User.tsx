import { FC, useState } from "react";
import { UserType } from "../../../entities/UsersState";
import { SelectColors } from "../../../applications/useCase/SelectColors";
import { periodOfDay } from "../../../applications/useCase/PeriodOfDay";
import deleteUser from "../../../infrastructure/repository/deleteUser";
import { useCreateUsers } from "../../../infrastructure/zustand/createUsers";

const User: FC<UserType> = ({
  name,
  email,
  address,
  phone,
  startHour,
  endHour,
}) => {
  const { deleteDataUser } = useCreateUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const color = SelectColors(`${startHour}`);
  const period = periodOfDay(`${startHour}`);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDetele = async () => {
    const deleteUserData = await deleteUser(email);
    if (deleteUserData) deleteDataUser(email);
    closeModal();
  };

  return (
    <div className="flex items-center gap-2">
      {startHour ? (
        <div
          className={`h-4 w-4 ${color} border border-gray-300 rounded-full`}
        ></div>
      ) : (
        <div
          className={`h-4 w-4 bg-gray-300 border border-gray-300 rounded-full`}
        ></div>
      )}

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"></path>
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05"></path>
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
      <div>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Perfil
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Perfil de {name}</h2>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Dirección:</strong> {address}
            </p>
            <p>
              <strong>Teléfono:</strong> {phone}
            </p>

            {startHour ? (
              <div className="pt-8">
                <p>
                  <strong>Hora de inicio: </strong> {`${startHour}:00`}{" "}
                  <span className="text-sm text-gray-300">{period}</span>
                </p>
                <p>
                  <strong>Hora de fin: </strong> {`${endHour}:00`}{" "}
                  <span className="text-sm text-gray-300">{period}</span>
                </p>
              </div>
            ) : (
              <p className="pt-8">
                <strong>Aun no tienes agenda</strong>
              </p>
            )}

            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleDetele}
              >
                Eliminar
              </button>

              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
