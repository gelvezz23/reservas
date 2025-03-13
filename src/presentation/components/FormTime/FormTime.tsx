/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useCreateUsers } from "../../../infrastructure/zustand/createUsers";
import TimeRangeInput from "../TimeRangeInput";
import { AddNewDataUsersType } from "../../../entities/firebase/addNewDataUser";
import addNewDataUser from "../../../infrastructure/repository/addNewDataUser";

function FormTime() {
  const dateInputRef: any = useRef(null);
  const { users, addNewDataZustand } = useCreateUsers();
  const [email, setEmail] = useState<string>("");
  const [form, setForm] = useState<AddNewDataUsersType>({
    date: "",
    startHour: "",
    endHour: "",
  });

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1; // Los meses comienzan en 0
    let day: any = today.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    const minDate = `${year}-${month}-${day}`;

    if (dateInputRef.current) {
      dateInputRef.current.setAttribute("min", minDate);
    }
  }, []);

  const handleOnChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!form.date || !form.startHour || !form.endHour || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    } else {
      const data = await addNewDataUser(email, form);
      if (data) {
        addNewDataZustand(email, form);
        alert("Tu agenda quedo programada.");
      }
    }
  };
  return (
    <div className="container mx-auto p-8 shadow-md rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">Agendar cita</h2>
        <p className="text-gray-600 mt-2">
          Elige un usuario, fecha y hora en la que agendar.
        </p>
      </div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Usuario:
          </label>
          <select
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setEmail(event.target.value)}
            required
          >
            <option value="">Selecciona un usuario</option>
            {users.map((user) => {
              return (
                <option value={user?.email} key={user?.email}>
                  {user?.email}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleOnChange}
            ref={dateInputRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <TimeRangeInput handleOnChange={handleOnChange} />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormTime;
