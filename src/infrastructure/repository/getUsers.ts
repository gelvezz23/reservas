/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { UserType } from "../../entities/UsersState";

const getUsers = async (): Promise<UserType[] | null> => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usuarios: any = [];

    querySnapshot.forEach((doc) => {
      // Excluye el ID del documento
      usuarios.push(doc.data());
    });

    console.log("Usuarios obtenidos:", usuarios);
    return usuarios;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};

export default getUsers;
