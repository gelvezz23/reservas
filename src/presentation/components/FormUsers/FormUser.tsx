/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { UserType } from "../../../entities/UsersState";
import createUsers from "../../../infrastructure/repository/createUser";
import { useCreateUsers } from "../../../infrastructure/zustand/createUsers";

const FormUser = () => {
  const { addUser } = useCreateUsers();
  const [form, setForm] = useState<UserType>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleOnChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event: any) => {
    event?.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Por favor, completa todos los campos.");
      return;
    } else {
      const { data } = await createUsers(form);
      if (data.id) {
        addUser(form);
        alert("Registro exitoso");
        setForm({
          name: "",
          email: "",
          address: "",
          phone: "",
        });
      }
    }
  };

  return (
    <div className="container mx-auto shadow-md p-4 rounded-xl">
      <h2 className="text-3xl font-bold text-blue-600">Nuevo Usuario</h2>
      <form className="max-w-md mx-auto" onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu nombre"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu correo electrónico"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu número de teléfono"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Dirección:
          </label>
          <textarea
            id="address"
            name="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu dirección"
            onChange={handleOnChange}
            value={form.address}
            required
          ></textarea>
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
};

export default FormUser;
